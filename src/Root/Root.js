import React from 'react';
import { Outlet } from "react-router-dom";
import Menu from '../Root/Navigation';
import Footer from './Footer';
const Root = () => {
    return (
        <div className=' '>
           <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;