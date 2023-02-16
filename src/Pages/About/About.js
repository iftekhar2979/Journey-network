import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUs from '../Home/AboutUs';
import WhyChooseUs from '../Home/WhyChooseUs';
const About = () => {
    return (
        <>
        <div className='container'>
        <HelmetProvider>
        <Helmet>
            <title>About--World Traveler</title>
        </Helmet>
        <AboutUs></AboutUs>
        <WhyChooseUs></WhyChooseUs>
        </HelmetProvider>
        </div>
        </>
    );
};

export default About;