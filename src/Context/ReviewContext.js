import React, { createContext, useState } from 'react';

export const ReviewState=createContext(null)
const ReviewContext = ({children}) => {
    const [reviewHandle,setReviewHandle]=useState()
    const object={
        reviewHandle,
        setReviewHandle
    }
    return (
        <ReviewState.Provider value={object}>
            {children}
        </ReviewState.Provider>
    );
};

export default ReviewContext;