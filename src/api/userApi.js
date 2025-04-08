import axios from 'axios';

const API_URL = 'http://localhost:3000/user';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}`, { username, password });
    return response.data; 
  } catch (error) {
    console.error('Login failed', error);
    throw new Error('Invalid credentials');
  }
};
