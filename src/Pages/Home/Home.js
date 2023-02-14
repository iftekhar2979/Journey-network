import React from 'react';
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
      
      <Slider></Slider>
      <Services></Services>
      <AboutUs></AboutUs>
      <Pakages></Pakages>
      <WhyChooseUs></WhyChooseUs>
      
      </>
    );
};

export default Home;