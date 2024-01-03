import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenSelect } from '../redux/user/selectors';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(tokenSelect);
  return token ? children : <Navigate to="/" />;
};
