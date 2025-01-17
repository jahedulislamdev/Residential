import React, { useContext, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../Provider/DataProvider';
import toast, { Toaster } from 'react-hot-toast';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';
const Login = () => {
   const { LoginUserWithEmailandPassword, setUser, loginWithGoogle } = useContext(ContextProvider);
   const [showPass, setShowPass] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const handleFormSubmit = (e) => {
      e.preventDefault();
      setUser(null);
      const userData = new FormData(e.currentTarget);
      const Email = userData.get("email");
      const Password = userData.get("password");

      LoginUserWithEmailandPassword(Email, Password)
         .then(res => {
            toast.success("Login successfull");
            setUser(res.user)
            navigate(location?.state ? location.state : "/")
         })
         .catch(err => {
            if (err.code === "auth/invalid-credential")
               toast.error("Invalid email or password");
         });
   }
   return (
      <div className='w-11/12 sm:w-1/2 md:w-2/3 lg:1/3 mx-auto border border-[#354c74] shadow-md my-3 py-4 rounded-lg'>
         <form onSubmit={handleFormSubmit} className="card-body">
            <p className='px-2 text-violet-300 text-2xl font-semibold'>Login</p>
            <div className="form-control">
               <input name='email' type="email" placeholder="example@email.com" className="input input-bordered focus:outline-none" required />
            </div>
            <div className="form-control">
               <div className="join items-center border border-gray-700">
                  <input name='password' type={showPass ? "text" : "password"} placeholder="password" className="join-item w-full border-r-0 input focus:outline-none input-bordered" required />
                  <button onClick={() => setShowPass(!showPass)} type='button' className='join-item p-2 focus:border-violet-500'>{showPass ? <IoEye className='size-5' /> : <IoEyeOff className='size-5' />}</button>
               </div>
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
                  <button onClick={loginWithGoogle} className='flex items-center justify-center border border-orange-400 rounded-md py-2 w-full px-4'><FcGoogle className='size-5 me-1' /> Google</button>
                  <button className='flex items-center justify-center border border-blue-500 rounded-md py-2 w-full px-4'><FaFacebook className='size-5 me-1 text-blue-400' /> Facebook</button>
               </div>
            </div>
         </div>
         <Toaster position='top-right' />
         <Helmet title='HomeHeaven - Login' />
      </div>
   );
};

export default Login;