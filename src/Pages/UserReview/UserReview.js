import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../Context/UserContext';
import Loading from '../../utilites/Loading';
import SingleUserReview from './SingleUserReview';
const UserReview = () => {
    const {user}=useContext(AuthContext)
    const [userReviews,setUserReviews]=useState()
    if(!user){
       <Loading></Loading>
    }
    
    useEffect(()=>{
       
        axios.get(`http://localhost:8000/getAllReviews?userUID=${user?.uid}`)
        .then(res=>{
            console.log(res.data)
            setUserReviews(res.data)
        })
        .catch(error=>console.log(error.message))
    },[user?.uid])

    return (
        <div className='container'>
           <h2>Total Reviews : {userReviews?.length}</h2>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>Service Image</th>
          <th>Service Name</th>
          <th>Review Text</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
{
    userReviews?.map((item,index)=><SingleUserReview data={item} index={index} key={item._id}></SingleUserReview>)
}
      </tbody>
    </Table>
        </div>
    );
};

export default UserReview;