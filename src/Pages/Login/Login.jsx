import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Login = () => {
   const handleFormSubmit = (e) => {
      e.preventDefault();
   }
   return (
      <div className='md:w-1/3 mx-auto border border-[#354c74] shadow-md py-7 my-3 rounded-lg'>
         <form onSubmit={handleFormSubmit} className="card-body">
            <p className='px-2 text-violet-300 text-2xl font-semibold'>Login</p>
            <div className="form-control">
               <input type="email" placeholder="example@email.com" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="cursor-pointer justify-start space-x-2 label">
                  <input type="checkbox" defaultChecked className="checkbox checkbox-sm rounded-box checkbox-primary" />
                  <span className="label-text">Remember me</span>
               </label>
            </div>
            <div className="form-control">
               <button className="btn btn-primary">Login</button>
               <p className='text-sm font-light mt-2 ps-1'>Don&apos;t have an Account? <Link to={'/registration'} className='font-medium text-violet-300'>Register</Link></p>
            </div>
         </form>
         <div className=''>
            <div className="flex flex-col items-center px-9 mx-auto">
               <div className="flex items-center w-full mb-4">
                  <span className="flex-grow h-px bg-gray-600"></span>
                  <span className="px-4 text-gray-500">Or Login With</span>
                  <span className="flex-grow h-px bg-gray-600"></span>
               </div>
               <div className='flex w-full space-x-5'>
                  <button className='flex items-center justify-center border border-orange-400 rounded-md py-2 w-full px-4'><FcGoogle className='size-5 me-1' /> Google</button>
                  <button className='flex items-center justify-center border border-blue-500 rounded-md py-2 w-full px-4'><FaFacebook className='size-5 me-1 text-blue-400' /> Facebook</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;