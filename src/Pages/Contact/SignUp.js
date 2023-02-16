
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
const SignUp = () => {
    const {createNewUser,updateUserProfile,setUser}=useContext(AuthContext)
    const { register, handleSubmit,watch,formState: { errors } } = useForm();
    const onSubmit = (obj) => {
     const {displayName,email,password,photoURL}=obj
    //  console.log(photoUrl)
     createNewUser(email,password)
     .then(result=>{
        const user=result.user
        updateUserProfile({displayName,photoURL})
        setUser(user)
        const notify = () => toast.success("Account Created Successfully",{position:'top-center',autoClose:2000,});
            notify()
     }).catch(err=>{
        console.log("err : ",err.message)
     })
    }
    return (
        
        <form
        id='request'
        className='main_form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='titlepage mb-4'>
                <h2>Register Here</h2>
            </div>
        <div className='row'>
          <div className='col-md-12 '>
            <input
              className='contactus'
              placeholder='Full Name'
              {...register('displayName', {
                required: true,
                maxLength: 30,
              })}
              aria-invalid={errors.displayName ? 'true' : 'false'}
            />
             {errors.displayName?.type === 'required' && <p className="text-danger">Name is required</p>}
          </div>
          <div className='col-md-12'>
            <input
              className='contactus'
              placeholder='Email'
              {...register('email', { required: true })}
              aria-invalid={errors.email?'true':'false'}
            />
             {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
          </div>
          <div className='col-md-12'>
            <input
              className='contactus'
              placeholder='photoUrl'
              {...register('photoURL', { required: true })}
              aria-invalid={errors.photoUrl?'true':'false'}
            />
             {errors.photoUrl?.type === 'required' && <p className="text-danger">Email is required</p>}
          </div>
          <div className='col-md-12'>
            <input
              className='contactus'
              placeholder='Phone Number'
              {...register('phoneNumber', { required: true })}
              aria-invalid={errors.phoneNumber?'true':'false'}

            />
            {errors.phoneNumber?.type === 'required' && <p className="text-danger">phone Number is required</p>}
          </div>
          <div className='col-md-12'>
            <input
              className='textarea'
              placeholder='Password'
              type='password'
              {...register('password', { required: true })}
              aria-invalid={errors.password?'true':'false'}
            />
             {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
          </div>
          <div className='col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <button type='submit' className='btn btn-outline-warning'>
              Register
            </button>
          </div>
          <div className='col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12'>
           
          </div>
        </div>
        <h6>Already have account <Link to="/contact">Log In</Link></h6>
      </form>
      
    );
};

export default SignUp;