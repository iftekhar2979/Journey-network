import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-item-center'>
        <Spinner animation="border" className='' role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    );
};

export default Loading;