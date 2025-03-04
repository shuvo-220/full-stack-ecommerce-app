import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  if(localStorage.getItem('user' && 'token')){
    return children;
  }
  return <Navigate to='/login' replace />
}

export default ProtectedRoute