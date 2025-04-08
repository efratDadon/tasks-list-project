import React, { useState } from 'react';
import { useAuth } from '../context/userContext';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password); 
      setError(null); 
      navigate('/tasklist');
    } catch (error) {
      setError('Connection failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
