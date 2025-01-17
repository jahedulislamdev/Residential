import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
   return (
      <div className="font-Poppins">
         <Navbar />
         <Outlet />
         <Footer />
         <Toaster position="top-right" />
      </div>
   );
};

export default Root;