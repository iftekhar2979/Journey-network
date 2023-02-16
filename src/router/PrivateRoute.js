import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Loading from '../utilites/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    // console.log(loading);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.uid ){
        return children
    }
    return <Navigate to='/contact' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
