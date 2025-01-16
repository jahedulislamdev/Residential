import React, { useContext } from 'react';
import { ContextProvider } from '../../Provider/DataProvider';

const UpdateProfile = () => {
   const { user, setUser } = useContext(ContextProvider);
   return (
      <div className='text-center h-40'>
         This is my update profile page
      </div>
   );
};

export default UpdateProfile;