import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './UserContext';

export const ReviewState=createContext(null)
const ReviewContext = ({children}) => {
    const {user}=useContext(AuthContext)
    const [reviewHandle,setReviewHandle]=useState()
    const [userReviews,setUserReviews]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:8000/getAllReviews?userUID=${user?.uid}`,{ headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },})
        .then(res=>{
            setUserReviews(res.data)
        })
        .catch(error=>console.log(error.message))
    },[user?.uid])
    const object={
        reviewHandle,
        setReviewHandle,
        userReviews,
        setUserReviews
    }
    return (
        <ReviewState.Provider value={object}>
            {children}
        </ReviewState.Provider>
    );
};

export default ReviewContext;