import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './slider.modul.css';
// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import SingleSlider from "./SingleSlider";

const Slider = () => {
   
    const carouselDetails=[

        {
          id:14,
            img:"https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
            title:"Let's Read The World",

        },
        {
          id:15,
            img:"https://images.unsplash.com/photo-1675800473686-ab069894ccf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
            title:"Let's Play With Mind and Explore The world",

        },{
          id:16,
            img:"https://images.unsplash.com/photo-1659430836012-77f4d3dc5b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1354&q=80",
            title:"Booking now for finding hemaliyas",
        }
       
    ]
  return (
    <div className="">
     <Swiper
        cssMode={true}
        navigation={true}
        // modules={[EffectFade]} effect="fade"
        
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        // autoplay={true}
        className="mySwiper"
      >

        {
            carouselDetails?.map((item,index)=><SwiperSlide key={index}><SingleSlider data={item} key={item.id}></SingleSlider></SwiperSlide>)
        }
       
      </Swiper>
    </div>
  );
};

export default Slider;
