import React, { useContext } from 'react';
import { ContextProvider } from '../../Provider/DataProvider';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
   const { user } = useContext(ContextProvider);
   const navigate = useNavigate()
   if (!user) {
      return <p className='flex justify-center items-center h-40 text-red-400'>No user found!</p>
   }
   return (
      <div className='w-11/12 md:w-2/3 lg:w-1/2 mx-auto my-3 rounded-lg bg-[#5d3f6a56] p-2 lg:p-5'>
         <div className='flex justify-between items-center'>
            <p className='text-end'><button onClick={() => navigate(-1)} className='text-violet-200 flex items-center'><IoIosArrowBack className='size-6' /></button></p>
            <p className=''><Link to={'/edit_profile'} className='text-violet-200'>Edit</Link></p>
         </div>
         <p className='text-center mb-7 text-violet-200 text-2xl font-semibold'>Profie information</p>
         <div className='sm:flex space-x-5 items-center bg-[#5d3f6a38] p-3'>
            <img className='rounded-box max-w-[120px] md:max-w-[200px] m-auto' src={user?.photoURL ? user.photoURL : "https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"} alt="" />
            <div className='mt-5 md:mt-0'>
               <p className='text-violet-300 text-sm sm:text-md md:text-lg'>Name : {user?.displayName}</p>
               <p className='text-violet-300 text-sm sm:text-md md:text-md'>Email : {user?.email}</p>
            </div>
         </div>
         <Toaster position='top-right' />
         <Helmet title='HomeHeaven - Profile' />
      </div>
   );
};

export default Profile;