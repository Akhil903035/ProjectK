// TaskDelete.js

import React from 'react';
import axios from 'axios';

const TaskDelete = ({ taskId }) => {
  const handleDeleteTask = () => {
    // Implement the logic to delete the task in the backend
    axios.delete(`/api/tasks/${taskId}`)
      .then((response) => {
        console.log('Task deleted successfully:', response.data);
        // Optionally, you can update the local state to re-render the TaskList component
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <div>
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
};

export default TaskDelete;
