import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import app from './../Firebase/Firbase_config';
import toast from 'react-hot-toast';

export const ContextProvider = createContext();
const DataProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(false);
   const [estate, setEstate] = useState([]);

   // Load estates data
   useEffect(() => {
      setLoading(true);
      fetch("/fakeData.json")
         .then(res => res.json())
         .then(data => {
            setEstate(data);
            setLoading(false);
         })
         .catch(err => {
            alert("Failed to load data", err);
            setLoading(false);
         });
   }, []);
   const auth = getAuth(app)
   //create user with email and password
   const RegisterWithEmailandPassword = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }
   //login user with email and password
   const LoginUserWithEmailandPassword = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }
   //login with google
   const googleProvider = new GoogleAuthProvider();
   const loginWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            setUser(result.user);
            console.log(result.user);
            //update user info
            onAuthStateChanged(auth, () => {
               if (user) {
                  displayName = user.displayName,
                     photoURL = user.photoURL
               }
            })
         })
         .catch((err) => {
            console.error(err)
            toast.error(err.message);
         })
   }
   //login with facebook
   //logout user
   //ovserve user
   const data = {
      estate,
      setEstate,
      loading,
      setLoading,
      user,
      setUser,
      RegisterWithEmailandPassword,
      LoginUserWithEmailandPassword,
      loginWithGoogle,
   };
   return (
      <ContextProvider.Provider value={data}>
         {children}
      </ContextProvider.Provider>
   );
};

export default DataProvider;
