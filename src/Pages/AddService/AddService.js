import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Rating from '../../utilites/Rating';
const AddService = () => {
    const {register,handleSubmit, errors, reset}=useForm()
    const [ratings,setRatings]=useState(0)
    const changeRating = (newRating) => {
        setRatings(newRating);
        console.log(ratings)
      };
    const onSubmit=(object)=>{
      // console.log(object)
       object["rating"]=ratings
        axios.post(`http://localhost:8000/addService`,object)
        .then(res=>{
            console.log(res.data)
            const notify = () => toast.success("Service Added Successfully",{position:'top-center',autoClose:2000,});
            notify()
            reset()
        })
        .catch(error=>console.log(error))
    }
    return (
      
        <div className='d-flex justify-content-center align-items-center'>
           <Helmet>
        <title>Blog--World Explorer</title>
      </Helmet>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="w-75 bordered">
                <h1 className='my-2 text-center'>Add Service</h1>
                <input type="text" className='form-control py-2 my-2' placeholder='Service Name'  {...register("serviceName",{required:true})}/>
                <textarea rows="4" className='form-control' cols="50" placeholder="Add the Deescription here" {...register("description",{required:true})}></textarea>
                <input type="text" className='form-control py-2 my-2' placeholder='Price' {...register("price",{required:true})} />
                <input type="text" className='form-control py-2 my-2' placeholder='Image' {...register("image",{required:true})} />
                <h5>Rating : 
          <span>
            {
                <span>
                {[1, 2, 3, 4, 5].map((value) => (
                  <Rating
                    key={value}
                    className='star'
                    filled={value <= ratings}
                    onClick={() => changeRating(value)}
                    
                  />
                ))}
              </span>
            }
          </span>
          </h5>
                <button className="btn btn-primary" type='submit'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;