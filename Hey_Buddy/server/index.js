require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const quoteScheduler = require('./cron/quoteScheduler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/quotes', quoteRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('✅ MongoDB connected');
  quoteScheduler();
  app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
});
