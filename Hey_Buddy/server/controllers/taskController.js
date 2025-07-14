const admin = require('../firebase'); // Firebase Admin
const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.query.userId });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();

    // Firebase notification logic
    const message = {
      notification: {
        title: 'New Task Created 📝',
        body: `Task: ${newTask.name} - Priority: ${newTask.priority}`
      },
      topic: 'tasks' // You can also target specific device tokens
    };

    const response = await admin.messaging().send(message);
    console.log('Push sent:', response);

    res.status(201).json(newTask);
  } catch (err) {
    console.error('Task creation failed:', err.message);
    res.status(500).json({ error: 'Task creation failed' });
  }
};
