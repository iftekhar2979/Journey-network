import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Contact.css';
const Contact = ({ children }) => {
  // const { createNewUser, updateUserProfile } = useContext(AuthContext);

  
  const [loginAndSignUpComponent,SideComponent]=children
  


  return (
    <HelmetProvider>
    <div id='contact'>
      <Helmet>
        <title>Login--World Explorer</title>
      </Helmet>
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
    </HelmetProvider>
  );
};

export default Contact;
