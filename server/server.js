const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const linkRoutes = require('./routes/linkRoutes');
const { redirectLink } = require('./controllers/linkController');


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();


// Enable CORS for frontend URL
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

// Parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Authentication and link-related API routes
app.use('/api/auth', authRoutes);
app.use('/api/links', linkRoutes);


// Public redirect route (handles shortCode → original URL)
app.get('/:shortCode', redirectLink);


// Health check / base route
app.get('/', (req, res) => {
  res.json({ message: 'TinyLink API is running' });
});


// Global error handler (catches unhandled exceptions)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    message: 'Something went wrong!' 
  });
});

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
