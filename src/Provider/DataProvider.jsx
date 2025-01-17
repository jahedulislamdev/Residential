import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut, } from "firebase/auth";
import app from './../Firebase/Firbase_config';
import toast from 'react-hot-toast';
export const ContextProvider = createContext();

const DataProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [estate, setEstate] = useState([]);
   const auth = getAuth(app);
   // Load estate data
   useEffect(() => {
      const fetchEstates = async () => {
         try {
            setLoading(true);
            const response = await fetch("/fakeData.json");
            const data = await response.json();
            setEstate(data);
         } catch (err) {
            toast.error("Failed to load data. Please try again later.");
         } finally {
            setLoading(false);
         }
      };
      fetchEstates();
   }, []);

   // Register user with email and password
   const RegisterWithEmailandPassword = async (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
   };

   // Login user with email and password
   const LoginUserWithEmailandPassword = async (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
   };

   // Login with Google
   const googleProvider = new GoogleAuthProvider();
   const loginWithGoogle = async () => {
      setLoading(true);
      try {
         const result = await signInWithPopup(auth, googleProvider);
         setUser(result.user);
         toast.success("Logged in with Google!");
         // Update user info
         await updateProfile(auth.currentUser, {
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
         });
      } catch (err) {
         toast.error(err.message);
      } finally {
         setLoading(false);
      }
   };

   // Logout user
   const logoutUser = async () => {
      setLoading(true);
      try {
         await signOut(auth);
         setUser(null);
         toast.success("Logout successful!");
      } catch (err) {
         toast.error("Logout failed. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   // Update user profile
   const ProfileUptoDate = async (UserName, userProfile) => {
      try {
         await updateProfile(auth.currentUser, {
            displayName: UserName,
            photoURL: userProfile,
         });
         setUser((prev) => ({
            ...prev,
            displayName: UserName,
            photoURL: userProfile,
         }));
         toast.success("Profile updated successfully!");
      } catch (err) {
         toast.error("Failed to update profile.");
         throw err;
      }
   };

   // Observe user authentication state
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, [auth]);

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
      ProfileUptoDate,
   };

   return (
      <ContextProvider.Provider value={data}>
         {children}
      </ContextProvider.Provider>
   );
};

export default DataProvider;
