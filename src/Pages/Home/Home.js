import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutUs from './AboutUs';
import Pakages from './Pakages';
import Services from './Services';
import Slider from './Slider';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  // const name=useContext(AuthContext)
  // console.log(name)
    return (
      <>
      <div className='container'>
      <HelmetProvider>
      <Helmet>
        <title>WorldExplorer</title>
      </Helmet>
      <Slider></Slider>
      <Services></Services>
      <AboutUs></AboutUs>
      <Pakages></Pakages>
      <WhyChooseUs></WhyChooseUs>
      </HelmetProvider>
      </div>
      </>
    );
};

export default Home;