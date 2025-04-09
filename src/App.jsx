import React from 'react';
import { BrowserRouter, Routes, Route , useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/userContext';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import './App.css';

const AppContent = () => {
  const { token } = useAuth(); 
  const navigate = useNavigate(); 

  React.useEffect(() => {
    if (token) {
      navigate('/tasklist'); 
    }
  }, [token, navigate]);

  return (
    <div className="app-container">
      {token ? (
        <TaskList />
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/tasklist" element={<TaskList />} /> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
