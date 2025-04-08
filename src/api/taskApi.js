import axios from 'axios';


const API_URL = 'http://localhost:3000/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error; 
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};


export const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error; 
    }
  };

export const updateTask = async (taskId, updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}/${taskId}`, updatedTask);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error; 
    }
  };
  
  