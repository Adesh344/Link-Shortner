const Link = require('../models/Link');
const { generateShortCode } = require('../utils/generateShortUrl');
const validator = require('validator');


exports.createLink = async (req, res) => {
  try {
    const { originalUrl, customCode } = req.body;

    // Validate URL
    if (!validator.isURL(originalUrl, { require_protocol: true })) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide a valid URL with protocol (http:// or https://)' 
      });
    }

    let shortCode;

    // Check if custom code is provided
    if (customCode) {
      // Validate custom code
      if (!/^[a-zA-Z0-9_-]+$/.test(customCode)) {
        return res.status(400).json({ 
          success: false,
          message: 'Custom code can only contain letters, numbers, hyphens, and underscores' 
        });
      }

      // Check if custom code already exists
      const existingLink = await Link.findOne({ shortCode: customCode });
      if (existingLink) {
        return res.status(400).json({ 
          success: false,
          message: 'This custom code is already taken' 
        });
      }

      shortCode = customCode;
    } else {
      // Generate random short code
      shortCode = generateShortCode();
      
      // Ensure uniqueness
      let existingLink = await Link.findOne({ shortCode });
      while (existingLink) {
        shortCode = generateShortCode();
        existingLink = await Link.findOne({ shortCode });
      }
    }

    const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

    const link = await Link.create({
      originalUrl,
      shortUrl,
      shortCode,
      user: req.user.id
    });

    res.status(201).json({
      success: true,
      data: link
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

// @desc    Get all user links
// @route   GET /api/links
// @access  Private
exports.getLinks = async (req, res) => {
  try {
    const links = await Link.find({ user: req.user.id }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: links.length,
      data: links
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};


exports.getLink = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    if (!link) {
      return res.status(404).json({ 
        success: false,
        message: 'Link not found' 
      });
    }

    // Check if user owns the link
    if (link.user.toString() !== req.user.id) {
      return res.status(403).json({ 
        success: false,
        message: 'Not authorized to access this link' 
      });
    }

    res.json({
      success: true,
      data: link
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};


exports.deleteLink = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    if (!link) {
      return res.status(404).json({ 
        success: false,
        message: 'Link not found' 
      });
    }

    // Check if user owns the link
    if (link.user.toString() !== req.user.id) {
      return res.status(403).json({ 
        success: false,
        message: 'Not authorized to delete this link' 
      });
    }

    await link.deleteOne();

    res.json({
      success: true,
      message: 'Link deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};


exports.redirectLink = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const link = await Link.findOne({ shortCode });

    if (!link) {
      return res.status(404).json({ 
        success: false,
        message: 'Link not found' 
      });
    }

   
    link.clicks += 1;
    await link.save();

    
    res.redirect(link.originalUrl);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};