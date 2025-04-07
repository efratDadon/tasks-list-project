
import React, { useState } from 'react';
import { addTask } from '../api/taskApi';
import { Button, TextField } from '@mui/material';

export const TaskForm = ({ setTasks }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await addTask(task);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask({ name: '', description: '' });
    } catch (error) {
      alert('Failed to add task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Name"
        name="name"
        value={task.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleInputChange}
        required
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
