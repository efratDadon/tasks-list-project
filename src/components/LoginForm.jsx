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
      alert('שלום לקוח יקר, טוב שחזרת');
      navigate('/tasklist');
    } catch (error) {
      setError('Connection failed. Try again.');
    }
  };

  return (
    <div>
      <h1>ברוך הבא לאפליקציה</h1>
      <p>כדי להציג את הרשימת משימות שלך אנא התחבר תחילה</p>

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
    </div>
  );
};

export default LoginForm;
