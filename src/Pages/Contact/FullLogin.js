import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Contact from './Contact';
import Login from './Login';
import SideComponent from './SideComponent';

const FullLogin = () => {
    const {loginImg}=useContext(AuthContext)
    return (
        <>
        <Contact><Login></Login><SideComponent loginImg={loginImg.login}></SideComponent></Contact>
      
        </>
    );
};

export default FullLogin;