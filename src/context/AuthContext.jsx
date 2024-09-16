/* eslint-disable react/prop-types */
import { useMutation } from '@tanstack/react-query';
import { createContext, useState } from 'react';
import { login, registerUser, updateUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setLocation = useNavigate();
  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onError: error => alert(error.response.data.message),
    onSuccess: data => {
      alert(data.message);
      localStorage.setItem('authToken', data.token);
      setLocation('/dashboard');
    },
  });
  const registerMutation = useMutation({
    mutationKey: ['register'],
    mutationFn: registerUser,
    onError: error => alert(error.response.data.message),
    onSuccess: ({ data }) => {
      alert(data.message);
      setLocation('/');
    },
  });
  const updateMutation = useMutation({
    mutationKey: ['update'],
    mutationFn: updateUser,
    onError: error => alert(error.response.data.message),
    onSuccess: ({ data }) => {
      alert(data.message);
      setLocation('/');
    },
  });
  const setUserData = data => setUser(data);
  return (
    <AuthContext.Provider value={{ user, loginMutation, registerMutation, updateMutation, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
