import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
const SingleServices = ({ data, handleDelete, setShow, show }) => {
  const { user } = useContext(AuthContext);
  const { image, description, _id, serviceName, createdAt } = data;


  return (
    <div className='col-lg-4 col-md-6 mb-4'>
   
 
      <div className='service-item bg-white text-center mb-2 py-5 px-4'>
      <PhotoProvider>
      <PhotoView src={image}>
        <img src={image} className=' mx-auto mb-4 img-fluid' alt='' />
      </PhotoView>
    </PhotoProvider>
        <h5 className='mb-2'>{serviceName}</h5>
        <p className='m-0'>{description.slice(0, 50) + '...'}</p>
        <div className='d-flex text-center'>
          <h6>Created At : {createdAt}</h6>
        </div>
        <Link to={`/service/${_id}`}>
          <button className='btn btn-warning ms-4'>Show Details</button>
        </Link>
        {user && (
          <>
          
            <Button variant='danger' className='ml-4' onClick={()=>handleDelete(_id)}>
              Delete
            </Button>
          </>
        )}

        {/* <Button variant="primary" onClick={}>
        Launch demo modal
      </Button> */}
      </div>
    </div>
  );
};

export default SingleServices;
