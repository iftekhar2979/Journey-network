import React from 'react';
import ch1 from "../../Assets/icons/ch1.png";
import ch2 from "../../Assets/icons/ch2.png";
import ch3 from "../../Assets/icons/ch3.png";
import "./choose.css";

const WhyChooseUs = () => {
    return (
        <>
        <div>
            <h1 className='text-center'> Why Choose Us?</h1>
        </div>
        <div className="choose ">
         <div className="">
            <div className="row">
               <div className="col-lg-6 col-md-7 ">
                  <div className="titlepage">
                     <h2 className='ms-4'>Why Choose Us</h2>
                     <p className='ms-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                     <div className="award ms-4">
                        <div id="awa_ho" className="ms-4 award_icon text_align_center">
                           <i><img src={ch1} alt="#"/>
                           </i>
                           <strong>client satisfaction</strong>
                        </div>
                        <div id="awa_ho" className="ms-4 award_icon text_align_center">
                           <i><img src={ch2} alt="#"/></i>
                           <strong>award</strong>
                        </div>
                        <div id="awa_ho" className=" ms-4 award_icon text_align_center">
                           <i><img src={ch3} alt="#"/></i>
                           <strong>Trustable</strong>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
    );
};

export default WhyChooseUs;