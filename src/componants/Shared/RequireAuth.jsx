import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';


function RequireAuth({ children }) {
    
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading){
      return <Loading></Loading>
    }
  
    if (!user?.uid) {      
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default RequireAuth;