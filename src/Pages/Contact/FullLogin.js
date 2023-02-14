import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Contact from './Contact';
import Login from './Login';
import SideComponent from './SideComponent';

const FullLogin = () => {
    const {loginImg}=useContext(AuthContext)
    // console.log(loginImg)
    // const navigation = useNavigation();
    // console.log(navigation)
    return (
        <>
        <Contact><Login></Login><SideComponent loginImg={loginImg.login}></SideComponent></Contact>
        {/* <Contact><SignUp></SignUp><SideComponent loginImg={loginImg.signUp}></SideComponent></Contact> */}
        </>
    );
};

export default FullLogin;