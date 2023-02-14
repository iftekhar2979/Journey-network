import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../utilites/useFetch';
import SingleServices from './SingleServices';
const Services = () => {
  
  const {data,loading}=useFetch("http://localhost:8000/homeServices")
  
  if(loading){
  return(  <div className="spinner-border h1" role="status">
  <span className="visually-hidden">Loading...</span>
</div>)


  }
  return (
    <div className='container-fluid py-5'>
      <div className='container pt-5 pb-3'>
        <div className='text-center mb-3 pb-3'>
          <h6
            className='text-primary text-uppercase'
            style={{ letterSpacing: '5px' }}
          >
            Services
          </h6>
          <h1>Tours & Travel Services</h1>
        </div>
        <div className='row'>
         
          {
            data?.map(item=><SingleServices data={item} key={item._id}></SingleServices>)
          }
        <div className='d-flex justify-content-center'>
        <Link to="/services"className="btn btn-warning py-md-3 px-md-5 mt-2">See More</Link>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
