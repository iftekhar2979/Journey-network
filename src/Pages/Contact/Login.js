import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
const Login = () => {
  const { signIn, setUser, signInWithFacebook } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || '/';
  const onSubmit = (obj) => {
    const { email, password } = obj;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        axios
          .post('http://localhost:8000/jwt', { user: user.email })
          .then((res) => {
            const notify = () => toast.success("Login Successfully",{position:'top-center',autoClose:2000,});
            notify()
            localStorage.setItem('token', res.data);
          });
        setUser(user);

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleFacebook = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <form id='request' className='main_form' onSubmit={handleSubmit(onSubmit)}>
      <div className='titlepage mb-4'>
        <h2>Log In Here</h2>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <input
            className='contactus'
            placeholder='Email'
            {...register('email', { required: true })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email?.type === 'required' && (
            <p className='text-danger'>Email is required</p>
          )}
        </div>
        <div className='col-md-12'>
          <input
            className='textarea'
            placeholder='Password'
            type='password'
            {...register('password', { required: true })}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password?.type === 'required' && (
            <p className='text-danger'>Password is required</p>
          )}
        </div>
        <div className='col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <button type='submit' className='btn btn-outline-warning'>
            Sign In
          </button>
        </div>
      </div>
      <button className='btn btn-primary' onClick={handleFacebook}>
        Sign In with Facebook
      </button>
      <h6>
        Don't Have Account <Link to='/signup'>Sign Up</Link>
      </h6>
    </form>
  );
};

export default Login;
