import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const UserData = new FormData(e.currentTarget);
      const Email = UserData.get("email")
      const Name = UserData.get("name")
      const Password = UserData.get("password")
      const Profile = UserData.get("profile")
      const Terms = UserData.get("terms")
      console.log(Email, Password, Name, Profile, Terms);

      if (Terms === null) {
         console.log("Accept our terms and conditions")
         return;
      }
   }
   return (
      <div className='w-11/12 sm:w-1/2 md:w-1/3 mx-auto border border-[#354c74] shadow-md my-3 rounded-lg'>
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
      </div>
   );
};

export default Registration;