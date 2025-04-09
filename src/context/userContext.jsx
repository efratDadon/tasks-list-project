import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { loginUser } from '../api/userApi'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || null);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    if (token) {
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const { token } = await loginUser(username, password);
      setToken(token);
      sessionStorage.setItem('token', token);
    } catch (error) {
      console.error('Login failed', error);
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
