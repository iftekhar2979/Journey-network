import axios from 'axios';
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { ReviewState } from '../../Context/ReviewContext';
import { AuthContext } from '../../Context/UserContext';
import Loading from '../../utilites/Loading';
import SingleUserReview from './SingleUserReview';
const UserReview = () => {
    const {user}=useContext(AuthContext)
    
    const {userReviews,setUserReviews}=useContext(ReviewState)
    
    if(!user){
       <Loading></Loading>
    }
    
    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/getAllReviews?userUID=${user?.uid}`,{ headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       Authorization: `Bearer ${localStorage.getItem('token')}`,
    //     },})
    //     .then(res=>{
    //         setUserReviews(res.data)
    //     })
    //     .catch(error=>console.log(error.message))
    // },[user?.uid])
    // console.log(userReviews)
    const handleDeleteReview=(reviewId)=>{
       
        if(user){
          axios.delete(`http://localhost:8000/deleteReview?userUID=${user?.uid}&requestedReviewId=${reviewId}`)
          .then(res=>{
              const remained=userReviews?.filter(item=>item._id!==reviewId)
              setUserReviews(remained)
      
          }).catch(err=>console.log(err))
        }
        else{
          return 
        }
    }
    const handleEdit=(id)=>{
      console.log(id)
    }
    return (

        <div className='container'>
           <h2>Total Reviews : {userReviews?.length}</h2>

           
        {
          userReviews?.length===0?
          <div className='d-flex align-items-center justify-content-center'>
            <h1>You Have no Reviews Add a review <Link to='/services'>Service</Link></h1>
          </div>
          :
          <>
          <Table striped bordered hover>
      <thead>
           <tr>
          <th>Number</th>
          <th>Service Image</th>
          <th>Service Name</th>
          <th>Review Text</th>
          <th>Date</th>
          <th>Delete </th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
{
    userReviews?.map((item,index)=><SingleUserReview handleDeleteReview={handleDeleteReview} handleEdit={handleEdit} data={item} index={index} key={item._id}></SingleUserReview>)
}
      </tbody>
    </Table>
          </>
        }
       
        </div>
    );
};

export default UserReview;