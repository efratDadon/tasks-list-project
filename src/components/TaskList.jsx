import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../api/taskApi';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const TaskList = () => {
  const [showTasks, setShowTasks] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const navigate = useNavigate();

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

  const handleShowTasks = () => {
    setShowTasks(true);
  };

  const handleHideTasks = () => {
    setShowTasks(false);
  };

  const handleShowTaskForm = () => {
    setShowTaskForm(true);
  };

  const handleHideTaskForm = () => {
    setShowTaskForm(false);
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div>
      <div>{error}</div>
      <Button onClick={handleLoginRedirect} className="button">
        עליך להתחבר כדי להציג את המשימות
      </Button>

    </div>
  );

  return (
    <div>
      {!showTasks && (
        <Button className="button" onClick={handleShowTasks}>רשימת המשימות שלי</Button>
      )}
      {showTasks && (
        <>
          <h1>Task List</h1>
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
          <Button className="button" onClick={handleHideTasks}>להסתרת רשימת המשימות</Button>
        </>
      )}
      {!showTaskForm && (
        <Button className="button" onClick={handleShowTaskForm}>הוספת משימה חדשה</Button>
      )}
      {showTaskForm && (
        <>
          <TaskForm setTasks={setTasks} />
          <Button onClick={handleHideTaskForm}>חזור</Button>
        </>
      )}
    </div>
  );
};

export default TaskList;
