const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  dueDate: Date,
  priority: { type: String, default: 'Normal' },
  completed: { type: Boolean, default: false },
  userId: String
});

module.exports = mongoose.model('Task', TaskSchema);
