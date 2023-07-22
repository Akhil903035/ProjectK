// components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send task data to the backend using Axios or Fetch API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={task.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={task.description}
        onChange={handleChange}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
