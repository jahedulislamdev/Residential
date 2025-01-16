import React, { useContext } from 'react';
import { ContextProvider } from '../../Provider/DataProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
   const { user } = useContext(ContextProvider);
   if (!user) {
      return <p className='flex justify-center items-center h-40 text-red-400'>No user found!</p>
   }
   return (
      <div className='w-1/2 mx-auto my-3 rounded-lg bg-[#5d3f6a56] p-5'>
         <p className='text-end'><Link to={'/edit_profile'} className='text-violet-200'>Edit</Link></p>
         <p className='text-center mb-7 text-violet-200 text-2xl font-semibold'>Profie information</p>
         <div className='flex space-x-5 items-center bg-[#5d3f6a38] p-3'>
            <img className='rounded-box' src={user?.photoURL} alt="" />
            <div>
               <p className='text-violet-300 text-lg'>Name : {user?.displayName}</p>
               <p className='text-violet-300 text-lg'>Email : {user?.email}</p>
            </div>
         </div>

         {/* <table className='table-fixed overflow-auto'>
            <tr className='border border-b-0'>
               <th className=' p-4 text-nowrap text-left'>User Name :</th>
               <td className=' p-4 text-violet-300'> {user?.displayName ? user.displayName : "Not Provided"}</td>
            </tr>
            <tr className='border border-b-0'>
               <th className='p-4 text-nowrap text-left'>Your Email :</th>
               <td className='p-4 text-violet-300'>{user?.email ? user.email : "Not Provided"}</td>
            </tr>
            <tr className='border border-b'>
               <th className='p-4 text-nowrap text-left'>Your PhotoURL :</th>
               <td className='p-4 text-violet-300'>{user?.photoURL ? user.photoURL.slice(0, 100) + "..." : "Not Provided"}</td>
            </tr>
         </table> */}
      </div>
   );
};

export default Profile;