import React, { useContext } from 'react';
import { ContextProvider } from '../Provider/DataProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   const { loading, user } = useContext(ContextProvider);
   const clickedRoute = useLocation();
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
   return <Navigate state={clickedRoute.pathname} to={"/login"} />
};

export default PrivateRoute;