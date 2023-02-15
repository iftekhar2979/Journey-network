import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/UserContext';
import './Contact.css';
const Contact = ({ children }) => {
  const { createNewUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  const [loginAndSignUpComponent,SideComponent]=children
  const onSubmit = (obj) => {
    const { displayName, email, password, phoneNumber, photoUrl } = obj;
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName, photoUrl });
        console.log(user);
        alert('successfully account created');
      })
      .catch((err) => {
        console.log('err : ', err.message);
      });
  };


  return (
    <div id='contact'>
      <div className='footer'>
        <div className=''>
       
         
            <div className='row'>
              <div className='col-md-6'>{loginAndSignUpComponent}
              
              </div>
              <div className='col-md-6'>{SideComponent}</div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
