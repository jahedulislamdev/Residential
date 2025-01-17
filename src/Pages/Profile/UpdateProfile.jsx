import React, { useContext } from 'react';
import { ContextProvider } from '../../Provider/DataProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
   const { user, setUser, ProfileUptoDate } = useContext(ContextProvider);
   const navigate = useNavigate();
   if (!user) {
      return <div>No user Found!</div>;
   }

   const handleProfileEdit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const Name = formData.get("userName");
      const Profile = formData.get("profile");
      try {
         await ProfileUptoDate(Name, Profile);
         toast.success("Profile updated successfully!");
         navigate('/')
      } catch (err) {
         toast.error("Failed to update profile. Try again later.");
      }
   };

   return (
      <form onSubmit={handleProfileEdit} className="card-body border border-[#283b8eb9] my-2 rounded-lg w-11/12 md:w-2/3 lg:w-2/5 mx-auto">
         <div className="form-control">
            <label className="label">
               <span className="label-text">Edit Name</span>
            </label>
            <input name="userName" type="text" defaultValue={user?.displayName || 'Name'} className="input input-bordered" required
            />
         </div>
         <div className="form-control">
            <label className="label">
               <span className="label-text">Edit Photo URL</span>
            </label>
            <input name="profile" type="url" defaultValue={user?.photoURL || 'photoURL'} className="input input-bordered"
            />
         </div>
         <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
               Save Changes
            </button>
         </div>
         <Toaster position='top-right' />
         <Helmet title='HomeHeaven - Edit Profile' />
      </form>
   );
};

export default UpdateProfile;
