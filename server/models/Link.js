const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, 'Please provide a URL'],
    trim: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    default: null
  }
});


// linkSchema.index({ shortCode: 1 });
linkSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('Link', linkSchema);