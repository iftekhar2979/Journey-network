import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ReviewState } from '../../Context/ReviewContext';
const EditService = ({ data,handleClose }) => {
    const {setReviewHandle,userReviews,setUserReviews}=useContext(ReviewState)
  
  const { register, handleSubmit, _, reset } = useForm();
  const [ratings, setRatings] = useState(0);
  const { serviceName, userUID, reviewText,serviceDescription, createdAt, time ,_id} = data;
  const changeRating = (newRating) => {
    setRatings(newRating);

  };
  const onSubmit = (object) => {
    axios.put(`http://localhost:8000/editReview?userUID=${userUID}&requestedReviewId=${_id}`,object)
    .then(res=>{
        setReviewHandle(res.data)
        const remainedItem=userReviews?.filter(item=>item._id!==res.data._id)
        const newReview=[...remainedItem,res.data]
        setUserReviews(newReview)
        handleClose()
        const notify = () => toast.success("Service Added Successfully",{position:'top-center',autoClose:2000,});
            notify()  
    })
    .catch(err=>console.log(err.message))
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
        <form
          action=''
          onSubmit={handleSubmit(onSubmit)}
          className='w-100 bordered'
        >
          <h1 className='my-2 text-center'>Edit Service</h1>
          <Form.Label>Service</Form.Label>
          <input
            type='text'
            className='form-control py-2 my-2'
            placeholder='Service Name'
            defaultValue={serviceName}
            {...register('serviceName', { required: true })}
            />
            <Form.Label>Service Description</Form.Label>
          <textarea
            rows='4'
            className='form-control'
            cols='50'
            defaultValue={serviceDescription}
            placeholder='Add the Deescription here'
            {...register('description', { required: true })}
            ></textarea>
            <Form.Label>Review Text</Form.Label>
          <input
            type='text'
            className='form-control py-2 my-2'
            placeholder='review Text'
            defaultValue={reviewText}
            {...register('reviewText', { required: true })}
          />
          
          <button type='submit' className='btn btn-primary'>Edit Service</button>
        </form>
      </div>
    </div>
  );
};

export default EditService;
