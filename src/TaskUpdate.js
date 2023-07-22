// TaskUpdate.js

import React from 'react';
import axios from 'axios';

const TaskUpdate = ({ taskId }) => {
  const handleUpdateStatus = () => {
    // Implement the logic to update the task status in the backend
    axios.put(`/api/tasks/${taskId}`, { status: 'completed' })
      .then((response) => {
        console.log('Task status updated successfully:', response.data);
        // Optionally, you can update the local state to re-render the TaskList component
      })
      .catch((error) => {
        console.error('Error updating task status:', error);
      });
  };

  return (
    <div>
      <button onClick={handleUpdateStatus}>Mark as Completed</button>
    </div>
  );
};

export default TaskUpdate;
