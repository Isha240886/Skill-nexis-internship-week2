require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Week 2 MERN Backend API is running...');
});

// Routes
app.use('/api/tasks', taskRoutes);       // Assignment 1: To-Do List REST API
app.use('/api/auth', authRoutes);        // Assignment 2: User Authentication API
app.use('/api/notes', noteRoutes);       // Mini Project: Notes App Backend

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
