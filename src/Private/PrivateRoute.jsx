import React, { useContext } from 'react';
import { ContextProvider } from '../Provider/DataProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   const { loading, user } = useContext(ContextProvider);
   if (loading) {
      return (
         <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
         </div>
      );
   }
   if (user) {
      return children
   }
   return <Navigate to={"/login"} />
};

export default PrivateRoute;