import React, { createContext, useContext,  useEffect, useState } from 'react';
import { register as registerApi, login as loginApi, logout as logoutApi, getCurrentUser } from '../services/authApi';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    const setCuretnUser = async () => {
      if (token) {
        const user = await getCurrentUser(token);
        console.log(user);
        setUser(user);
      }
    }
    setCuretnUser();


  }, [token]);



  const register = async (username, email, password) => {
    setIsLoading(true);
    const response = await registerApi(username, email, password);
    setIsLoading(false);

    if (response.success) {
      setToken(response.token);
      localStorage.setItem('jwt', response.token);
    }
    else {
      throw new Error(response.error);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await loginApi(email, password);
    setIsLoading(false);

    if (response.success) {
      setToken(response.token);
      localStorage.setItem('jwt', response.token);
    }
    else {
      throw new Error(response.error);
    }
  };

  const logout = async () => {
    localStorage.removeItem('jwt');
    setIsLoading(true);
    await logoutApi();
    setIsLoading(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
