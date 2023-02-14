import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Contact from './Contact';
import SideComponent from './SideComponent';
import SignUp from './SignUp';
const FullSignUp = () => {
    const {loginImg}=useContext(AuthContext)
    return (
        <div>
             <Contact><SignUp></SignUp><SideComponent loginImg={loginImg.signUp}></SideComponent></Contact>
        </div>
    );
};

export default FullSignUp;