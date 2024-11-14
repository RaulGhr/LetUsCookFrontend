import React, { createContext, useContext, useState } from 'react';
import { register as registerApi, login as loginApi, logout as logoutApi, getCurrentUser } from '../api/authApi';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(false);

  const register = async (username, email, password) => {
    setIsLoading(true);
    const response = await registerApi(username, email, password);
    setIsLoading(false);

    if (response.success) {
      setUser(response.user);
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
      setUser(response.user);
    }
    else {
      throw new Error(response.error);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    await logoutApi();
    setIsLoading(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
