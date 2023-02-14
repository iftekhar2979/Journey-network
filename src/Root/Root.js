import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import NavigationBar from './NavigationBar';
const Root = () => {
    return (
        <div className='container container-fluid'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;