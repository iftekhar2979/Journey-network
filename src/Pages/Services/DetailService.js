import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Rating from '../../utilites/Rating';
import Reviews from './Reviews';
const DetailService = () => {
  const { user } = useContext(AuthContext);
// console.log(user)
const [ratings, setRatings] = useState(0);
  const state = useLoaderData();
  const [review, setReview] = useState();
  
  const { description, image, price, rating, serviceName, createdAt, _id } =state;
  const changeRating = (newRating) => {
    setRatings(newRating);
    // console.log(ratings)
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/reviews?postId=${_id}`)
      .then((res) => setReview(res.data))
      .catch((err) => console.log(err.message));
  }, [_id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target
    const reviewText = e.target.review.value;
    // const { displayName, photoURL, uid } = user;
    if(user){
      axios
      .post(`http://localhost:8000/addReview`, {
        reviewer: user?.displayName,
        userUID: user?.uid,
        serviceName:serviceName,
        serviceDescription:description,
        serviceImg:image,
        postId: _id,
        rating:ratings,
        reviewerImg: user?.photoURL,
        reviewText: reviewText,
      })
      .then((res) => {
        
        setReview((prevReviews) => [res.data, ...prevReviews]);
        form.reset()
      })
      .catch((error) => console.log(error.message));
    }

  };
  const handleDeleteReview=(reviewId)=>{
    if(user){
      axios.delete(`http://localhost:8000/deleteReview?userUID=${user?.uid}&requestedReviewId=${reviewId}`)
      .then(res=>{
        console.log(res.data)
          const {_id}=res.data.deleteReview
          const remainedReviews=review?.filter(item=>item._id!==_id)
          setReview(remainedReviews)
  
      }).catch(err=>console.log(err))
    }
    else{
      return 
    }
}
    
   
  return (
    <div className='container mt-4'>
      <HelmetProvider>
      <Helmet>
        <title>{serviceName}----world Explorer</title>
      </Helmet>
      </HelmetProvider>
      <div className='d-flex justify-content-center'>
      <PhotoProvider>
      <PhotoView src={image}>
     
        <img src={image} alt='' className='img-fluid' />
      </PhotoView>
    </PhotoProvider>
      </div>
      <div className='text-center'>
        <h1>{serviceName}</h1>
        <p>{description}</p>

        <h4>Price : {price}</h4>
        <h5>Rating : 
          <span>
            {
                <span>
                {[1, 2, 3, 4, 5].map((value) => (
                  <Rating
                    key={value}
                    className='star'
                    filled={value <= rating}
                    
                  />
                ))}
              </span>
            }
          </span>
          </h5>
        <h5>Created At: {createdAt}</h5>
      </div>
      <h1>Reviews : </h1>

   {user ? <>
    <form
        action=''
        onSubmit={handleSubmit}
        className='d-flex justify-content-center align-items-center'
      >
        <textarea className='text-area' name='review'></textarea>
     
     <span>
      {[1,2,3,4,5]
        .map((value) => (
          <Rating 
           key={value} 
           className="star"
           filled={value <= ratings}
           onClick={() => changeRating(value)}
           />
        ))}
    </span>
     
        <div>
          <button className='btn btn-warning ms-2'>Post</button>
        </div>
      </form>

    </>
    :
  <h3>Please Log In for Review</h3>
}
    
      {review?.map((item) => (
        <Reviews key={item._id} data={item} handleDeleteReview={handleDeleteReview}></Reviews>
      ))}
    </div>
  );
};

export default DetailService;
