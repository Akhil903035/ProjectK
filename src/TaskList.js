// TaskList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskUpdate from './TaskUpdate';
import TaskDelete from './TaskDelete';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    axios.get('/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - Status: {task.status}
            <TaskUpdate taskId={task.id} />
            <TaskDelete taskId={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
