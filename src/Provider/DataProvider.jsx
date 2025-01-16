import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import app from './../Firebase/Firbase_config';
import toast from 'react-hot-toast';

export const ContextProvider = createContext();
const DataProvider = ({ children }) => {
   const [user, setUser] = useState(null);
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
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }
   //login user with email and password
   const LoginUserWithEmailandPassword = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   //login with google
   const googleProvider = new GoogleAuthProvider();
   const loginWithGoogle = () => {
      setLoading(true);
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            setUser(result.user);
            console.log(result.user);
            setLoading(false);
            //update user info
            updateProfile(auth.currentUser, {
               displayName: result.user.displayName,
               photoURL: result.user.photoURL,
            })
         })
         .catch((err) => {
            console.error(err)
            toast.error(err.message);
         })
   }
   //login with facebook
   //logout user
   const logoutUser = () => {
      setLoading(true);
      signOut(auth)
         .then(() => {
            toast.success("Logout Successfull")
            setLoading(false)
         })
         .catch(() => {
            toast.error("Logout faild, try again.")
         })
   }
   // update user info 
   const ProfileUptoDate = (UserName, userProfile) => {
      return updateProfile(auth.currentUser, {
         displayName: UserName,
         photoURL: userProfile,
      })
   }
   //ovserve user
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
      })
      return () => {
         unsubscribe()
         setLoading(false)
      }
   }, [])
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
      logoutUser,
      ProfileUptoDate
   };
   return (
      <ContextProvider.Provider value={data}>
         {children}
      </ContextProvider.Provider>
   );
};

export default DataProvider;
