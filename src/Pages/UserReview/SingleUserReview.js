import React from 'react';

const SingleUserReview = ({data,index}) => {
    const {serviceName,serviceImg,reviewText,createdAt,time}=data
    return (
        <>
        <tr>
          <td>{index+1}</td>
          <td><img src={serviceImg} alt="" className='table-img'/></td>
          <td>{serviceName}</td>
          <td>{reviewText}</td>
          <td>{createdAt} <br/><span className='h6'>{time}</span></td>
        </tr></>
    );
};

export default SingleUserReview;