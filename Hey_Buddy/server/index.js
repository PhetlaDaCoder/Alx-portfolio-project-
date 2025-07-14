const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  // ⬅️ Added MongoDB
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err.message));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const taskRoutes = require('./routes/taskRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
app.use('/api/tasks', taskRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/notifications', require('./routes/notifications'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
