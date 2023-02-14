import React from 'react';

const SingleSlider = ({data}) => {
    return (
        <div>
             <div className="carousel-item active">
                    <img className="w-100" src={data.img} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3">
                            <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                            <h1 className="display-3 text-white mb-md-4">{data.title}</h1>
                            <a href="" className="btn btn-warning py-md-3 px-md-5 mt-2">Book Now</a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SingleSlider;