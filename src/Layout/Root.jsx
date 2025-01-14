import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
   return (
      <div className="font-Poppins">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;