import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUs from '../Home/AboutUs';
const About = () => {
    return (
        <>
        <div className='container'>
        <HelmetProvider>
        <Helmet>
            <title>About--World Traveler</title>
        </Helmet>
        <AboutUs></AboutUs>
        </HelmetProvider>
        </div>
        </>
    );
};

export default About;