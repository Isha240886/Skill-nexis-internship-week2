require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'User API is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
