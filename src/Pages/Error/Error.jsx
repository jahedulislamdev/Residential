import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

const Error = () => {
   const listenError = useRouteError();
   console.log(listenError);;
   return (
      <>
         {listenError.status === 404 ?
            <div className="bg-[#0F172A] h-screen flex justify-center items-center space-x-2">
               <p className="text-2xl font-bold border-e pe-4">404</p>
               <p className="text-xl font-semibold">This page could not be found.</p>
            </div> :
            <div className="bg-[#0F172A] h-screen flex justify-center items-center space-x-2">
               <p className="text-2xl font-bold border-e pe-4">{listenError.status}</p>
               <p className="text-xs sm:text-lg md:text-xl font-semibold text-red-600">An Unexpected Application Error occared</p>
            </div>
         }
         <Helmet title="HomeHeaven - Error" />
      </>
   );
};

export default Error;