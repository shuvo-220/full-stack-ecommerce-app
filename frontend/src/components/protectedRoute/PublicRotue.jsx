import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRotue = ({children}) => {
    if(localStorage.getItem('user' && 'token')){
        <Navigate to='/' replace />
    }
  return children;
}

export default PublicRotue