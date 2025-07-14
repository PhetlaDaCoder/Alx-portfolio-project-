import React, { useState } from 'react';
import axios from 'axios'; // ⬅️ Required for the POST request

const CreateTask = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dueDate: '',
    priority: 'Normal',
    userId: 'buddy123' // ⬅️ You can replace with dynamic user ID later
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submitting Task:', formData);

    try {
      const res = await axios.post('http://localhost:4000/api/tasks', formData);
      console.log('Task saved:', res.data);
      alert('Task saved successfully! 🎉');
      setFormData({ name: '', description: '', dueDate: '', priority: 'Normal', userId: 'buddy123' });
    } catch (err) {
      console.error('Error saving task:', err.message);
      alert('Oops! Task could not be saved 🚨');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Task 📝</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Task Name" value={formData.name} onChange={handleChange} required className="form-control mb-2"/>
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="form-control mb-2"/>
        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="form-control mb-2"/>
        <select name="priority" value={formData.priority} onChange={handleChange} className="form-control mb-2">
          <option>Low</option>
          <option>Normal</option>
          <option>High</option>
        </select>
        <button type="submit" className="btn btn-primary">Save Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
