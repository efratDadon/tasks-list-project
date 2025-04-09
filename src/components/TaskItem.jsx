import React, { useState } from 'react';
import { Button } from '@mui/material';
import './TaskItem.css'; 

export const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    name: task.name,
    description: task.description,
  });

  const handleUpdate = () => {
    onUpdate(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask.name}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, name: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
          />
          <Button onClick={handleUpdate}>Save</Button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={() => onDelete(task.id)}>Delete</Button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
