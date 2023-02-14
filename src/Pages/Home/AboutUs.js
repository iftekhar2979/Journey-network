import React from 'react';

const AboutUs = () => {
    return (
        <div className="container-fluid py-5">
        <div className="container pt-5">
            <div className="row">
            <div className="col-lg-6" style={{minHeight:"500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" style={{objectFit:"cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-warning text-uppercase" style={{letterSpacing:"5px"}}>About Us</h6>
                        <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        
                        <a href="" className="btn btn-warning mt-1">Book Now</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default AboutUs;