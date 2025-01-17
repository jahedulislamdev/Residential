import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../Provider/DataProvider';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
   const { RegisterWithEmailandPassword, ProfileUptoDate } = useContext(ContextProvider);
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const UserData = new FormData(e.currentTarget);
      const Email = UserData.get("email")
      const Name = UserData.get("name")
      const Password = UserData.get("password")
      const Profile = UserData.get("profile")
      const Terms = UserData.get("terms")
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

      if (!passwordRegex.test(Password)) {
         toast.error("Password must be at least 6 characters including at least one uppercase and one lowercase latter");
         return;
      } else if (Terms === null) {
         toast.error("Accept our terms and conditions")
         return;
      }
      RegisterWithEmailandPassword(Email, Password)
         .then((res) => {
            toast.success("Registration successfull")
            res.user.displayName = Name;
            res.user.photoURL = Profile;
            ProfileUptoDate(res.user.displayName, res.user.photoURL)
            e.target.reset();
         })
         .catch((err) => {
            if (err.code === "auth/email-already-in-use")
               toast.error("Email Already in use.")
         }
         )
   }
   return (
      <div className='w-11/12 sm:w-1/2 md:w-2/3 lg:1/3 mx-auto border border-[#354c74] shadow-md my-3 rounded-lg'>
         <form onSubmit={handleFormSubmit} className="card-body">
            <p className='px-2 text-violet-300 text-2xl font-semibold'>Registration</p>
            <div className="form-control">
               <input name='name' type="text" placeholder="Username" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <input name='profile' type="url" placeholder="PhotoURl" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <input name='email' type="email" placeholder="example@email.com" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="cursor-pointer justify-start space-x-2 label">
                  <input name='terms' type="checkbox" defaultChecked className="checkbox checkbox-sm rounded-box checkbox-primary" />
                  <span className="label-text">Accept our <Link to={''} className='text-violet-300'>Terms and Conditions</Link></span>
               </label>
            </div>
            <div className="form-control">
               <button className="btn btn-primary">Register</button>
               <p className='text-sm font-light mt-2 ps-1'>Don&apos;t have an Account? <Link to={"/login"} className='font-medium text-violet-300'>Login</Link></p>
            </div>
         </form>
         <Toaster
            position='top-right'
            reverseOrder={true} />
         <Helmet title='HomeHeaven - Registration' />
      </div>
   );
};

export default Registration;