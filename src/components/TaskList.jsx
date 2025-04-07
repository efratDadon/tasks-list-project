
import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../api/taskApi';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      alert('Failed to delete task');
    }
  };

  const handleUpdate = async (taskId, updatedTask) => {
    try {
      const updatedTaskData = await updateTask(taskId, updatedTask);
      setTasks(tasks.map((task) => (task.id === taskId ? updatedTaskData : task)));
    } catch (error) {
      alert('Failed to update task');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm setTasks={setTasks} />
      <ul>
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={handleDelete} 
            onUpdate={handleUpdate} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
