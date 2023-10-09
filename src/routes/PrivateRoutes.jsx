import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useNavigate } from 'react-router-dom';

export default function PrivateRoutes({children}) {

    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate();

    if(loading) {
        return;
    }

    if(user) {
        return children;
    }
  return <Navigate to='/signin'></Navigate>
}
