const express = require('express');
const router = express.Router();
const { 
  createLink, 
  getLinks, 
  getLink, 
  deleteLink 
} = require('../controllers/linkController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createLink)
  .get(protect, getLinks);

router.route('/:id')
  .get(protect, getLink)
  .delete(protect, deleteLink);

module.exports = router;