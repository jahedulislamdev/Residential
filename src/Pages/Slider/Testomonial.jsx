import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const Testimonial = () => {
   const testimonials = [
      {
         id: 1,
         name: "Sarah Williams",
         role: "Homeowner",
         image: "https://randomuser.me/api/portraits/women/21.jpg",
         date: "Jan 18,2024",
         message:
            "Finding my dream home was effortless with HomeHeaven! The process was smooth, and the support team was there at every step.The process was smooth, and the support team was there at every step.",
      },
      {
         id: 2,
         name: "James Brown",
         role: "Tenant",
         date: "Mar 18, 2024",
         image: "https://randomuser.me/api/portraits/men/22.jpg",
         message:
            "I rented my perfect apartment through this platform. The listings were detailed, and the search filters made it easy to find exactly what I wanted.and the search filters made it easy to find exactly what I wanted.",
      },
      {
         id: 3,
         name: "Olivia Johnson",
         role: "Real Estate Investor",
         image: "https://randomuser.me/api/portraits/women/23.jpg",
         date: "Sep 18,2023",
         message:
            "HomeHeaven offers a wide range of properties and excellent insights into the market.It’s been invaluable for my investments! It’s been invaluable for my investments!",
      },
      {
         id: 4,
         name: "Liam Martin",
         role: "Seller",
         image: "https://randomuser.me/api/portraits/men/24.jpg",
         date: "Aug 18,2023",
         message:
            "Selling my property was so easy with HomeHeaven. I got great offers quickly, and the customer service was outstanding.I got great offers quickly, and the customer service was outstanding.",
      },
      {
         id: 5,
         name: "Emma Davis",
         role: "First-Time Buyer",
         image: "https://randomuser.me/api/portraits/women/25.jpg",
         date: "Jan 18,2025",
         message:
            "I was nervous about buying my first home,I got great offers quickly, and the customer service was outstanding. but this platform made the experience stress-free and enjoyable. Highly recommend!",
      },
   ];

   return (
      <Swiper
         loop={true}
         speed={1000}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            540: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
         }}
         navigation={true}
         modules={[FreeMode, Navigation, Autoplay]}
         className="mySwiper2"
      >
         {
            testimonials.map(tes =>
               <SwiperSlide key={tes.id} className='md:p-8 p-4 rounded-lg'>
                  <div className='flex justify-center items-center space-x-5 md:mb-10 mb-4'>
                     <img className='rounded-full w-10 sm:w-20' src={tes.image} alt="" />
                     <div>
                        <p className='font-semibold text-md sm:text-lg'>{tes.name}</p>
                        <p className='text-xs md:text-sm font-light text-left'>{tes.role}</p>
                     </div>
                  </div>
                  <p className='text-violet-300 text-left text-sm sm:text-lg max-h-24 sm:max-h-40 overflow-hidden'>{tes.message.slice(0, 170) + "..."}</p>
                  <div className='flex items-center justify-between sm:mt-9 mt-5'>
                     <p className='flex space-x-2 text-yellow-300'><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /><FaRegStar /></p>
                     <p className='text-gray-300 font-light'>{tes.date}</p>
                  </div>
               </SwiperSlide>)
         }
      </Swiper>
   );
};

export default Testimonial;
