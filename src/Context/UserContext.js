import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth, GoogleAuthProvider, onAuthStateChanged,
  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
export const AuthContext=createContext(null)
 const UserContext = ({children}) => {
  const contact={
    login:"https://safekaro.com/images/login.png",
    signUp:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
  const [loginImg,setLoginImg]=useState(contact)
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app)
  
const facebookProvider = new FacebookAuthProvider()
const googleprovider = new GoogleAuthProvider();
    const createNewUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const signOutUser = () => {
      return signOut(auth);
    };
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleprovider);
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
,signInWithGoogle
    }
    return (
        <AuthContext.Provider value={object}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;