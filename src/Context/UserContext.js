import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth, onAuthStateChanged,
  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firbase/firebase.config';
export const AuthContext=createContext(null)
 const UserContext = ({children}) => {
  const contact={
    login:"https://safekaro.com/images/login.png",
    signUp:"https://www.shutterstock.com/image-vector/new-user-online-registration-sign-600w-1983968993.jpg"
  }
  const [loginImg,setLoginImg]=useState(contact)
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app)
  
const facebookProvider = new FacebookAuthProvider()
    const createNewUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const signOutUser = () => {
      // setLoading(true);
      return signOut(auth);
    };
    const updateUserProfile = (object) => {
        setLoading(true)
        return updateProfile(auth.currentUser, object);
      };
      const signInWithFacebook=()=>{
        setLoading(true)
        return signInWithPopup(auth,facebookProvider)
      }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          // console.log(currentUser);
          if (currentUser) {
            setLoading(false);
            setUser(currentUser);
          } else {
            setLoading(false);
          }
          return () => unSubscribe();
        });
      }, [auth]);
    const object={
        createNewUser,signIn,signOutUser,updateUserProfile,loginImg,setUser,user,signInWithFacebook,loading

    }
    return (
        <AuthContext.Provider value={object}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;