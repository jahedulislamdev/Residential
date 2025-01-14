const Navbar = () => {
   return (
      <div className=" bg-[#5d3f6a73] text-white text-sm navbar sticky top-0 z-[50]">
         <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">HomeHaven</a>
         </div>
         <div className="flex-none gap-2">
            <div className="form-control">
               <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full">
                     <img src="https://cdn-icons-png.flaticon.com/128/9308/9308008.png" />
                  </div>
               </div>
               <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-xl z-[50] mt-3 w-52 p-2 shadow-xl">
                  <li>
                     <button className="justify-between">
                        Your Profile
                        <span className="badge">New</span>
                     </button>
                  </li>
                  <li><button>Update Profile</button></li>
                  <li><button>Logout</button></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;