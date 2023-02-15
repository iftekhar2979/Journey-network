import React, { useContext, useState } from 'react';
// import React, { PureComponent } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ReviewState } from '../../Context/ReviewContext';
import EditService from '../AddService/EditService';

const SingleUserReview = ({ data, index ,handleDeleteReview,}) => {
 
  const {reviewHandle}=useContext(ReviewState)

  const [show, setShow] = useState(false);
  const { serviceName, serviceImg, reviewText, createdAt, time ,_id} = data;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <img src={serviceImg} alt='' className='table-img' />
        </td>
        <td>{reviewHandle?.serviceName?reviewHandle.serviceName:serviceName}</td>
        <td>{reviewHandle?.reviewText?reviewHandle.reviewText:reviewText  }</td>
        <td>
          {createdAt} <br />
          <span className='h6'>{time}</span>
        </td>
        <td className='d-flex justify-content-center align-items-center'>
          <span className='h1 text-danger cursor-pointer p-2' onClick={()=>handleDeleteReview(_id)}>x</span>
        </td>
        <td >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h1 my-4'
            onClick={handleShow}
            
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
            />
          </svg>
        </td>
       

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditService data={data}></EditService></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        
      </tr>
    </>
  );
};

export default SingleUserReview;
