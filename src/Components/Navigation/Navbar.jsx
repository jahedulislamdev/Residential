import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Provider/DataProvider";

const Navbar = () => {
   const { user } = useContext(ContextProvider);
   return (
      <div className=" bg-[#5d3f6a] text-white text-sm navbar sticky top-0 z-[50]">
         <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost text-xl font-bold">HomeHaven</Link>
         </div>
         <div className="flex-none gap-2">
            <div className="form-control">
               <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div tabIndex={0} className="dropdown dropdown-end">
               <div role="button" className="btn btn-circle avatar">
                  <div className="w-8 rounded-full">
                     <img src="https://cdn-icons-png.flaticon.com/128/9308/9308008.png" />
                  </div>
               </div>
               <ul tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-xl z-[50] mt-3 w-52 p-2 shadow-xl">
                  <li>
                     <Link to={'/profile'} className="justify-between">
                        Your Profile
                        <span className="badge">New</span>
                     </Link>
                  </li>
                  <li><Link>Update Profile</Link></li>
                  {user ? <li><Link>Logout</Link></li> : <li><Link to={"/login"}>Login</Link></li>}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;