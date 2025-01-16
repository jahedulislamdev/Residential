import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="bg-[#0F172A] h-screen flex justify-center items-center space-x-2">
         <p className="text-2xl font-bold border-e pe-4">404</p>
         <p className="text-xl font-semibold">This page could not be found.</p>
      </div >
   );
};

export default Error;