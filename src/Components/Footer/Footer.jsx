import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
   const socialMediaIcos = <>
      <a href="#" className=" hover:text-gray-300">
         <FaFacebookF className="size-6" />
      </a>
      <a href="#" className=" hover:text-gray-300">
         <FaTwitter className="size-6" />
      </a>
      <a href="#" className=" hover:text-gray-300">
         <FaInstagram className="size-6" />
      </a>
      <a href="#" className=" hover:text-gray-300">
         <FaLinkedin className="size-6" />
      </a>
   </>
   const quickLinks = <>
      <a href="/home" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/services" className="hover:underline">Services</a>
      <a href="/contact" className="hover:underline">Contact</a>
      <a href="/faqs" className="hover:underline">FAQs</a>
   </>
   return (
      <footer className=" text-white text-sm py-2">
         <div className="max-w-6xl mx-auto md:px-4 md:flex space-y-6 justify-between items-center">

            {/* Left Section: Logo and Tagline */}
            <div className="flex md:flex-col justify-center items-center space-x-2 text-gray-300">
               {/* <img src="  " alt="HomeHaven Logo" className="h-8" /> */}
               <span className="font-semibold text-2xl md:text-lg">Your Haven, Your Home</span>
            </div>

            {/* Center Section: Quick Links */}
            <div className="flex justify-evenly md:space-x-6 text-lg text-gray-400">
               {quickLinks}
            </div>

            {/* Right Section: Social Media Icons */}
            <div className="flex justify-evenly md:space-x-5 text-gray-500">
               {socialMediaIcos}
            </div>
         </div>

         {/* Bottom Section: Copyright */}
         <div className="text-center text-gray-400 mt-9 text-sm font-light">
            © 2025 HomeHaven. All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;
