import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../components/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  //bloqué l'accès aux personnes qui ne sont pas admin
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/zonelogin' />;
  }
  return children;
};

export default ProtectedRoute;