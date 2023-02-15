import React from 'react';
import Helmet from 'react-helmet';
import AboutUs from '../Home/AboutUs';
const About = () => {
    return (
        <>
        <Helmet>
            <title>About--World Traveler</title>
        </Helmet>
        <AboutUs></AboutUs>
        </>
    );
};

export default About;