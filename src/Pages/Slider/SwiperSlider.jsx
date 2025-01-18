import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'

const SwiperSlider = () => {
   const sliderData = [
      {
         id: 1,
         title: "Luxury Villa in Beverly Hills",
         description: "A stunning 5-bedroom villa with a private pool and city views.",
      },
      {
         id: 2,
         title: "Modern Apartment in New York City",
         description: "A sleek 2-bedroom apartment with skyline views in Manhattan.",
      },
      {
         id: 3,
         title: "Cozy Family Home in Suburbia",
         description: "A spacious 4-bedroom home in a family-friendly neighborhood.",
      },
      {
         id: 4,
         title: "Beachfront Condo in Miami",
         description: "A luxurious 3-bedroom condo with a balcony overlooking the ocean.",
      },
      {
         id: 5,
         title: "Charming Cottage in the Countryside",
         description: "A peaceful 3-bedroom retreat surrounded by lush greenery.",
      },
   ];

   return (
      <Swiper
         id='swiperMain'
         spaceBetween={30}
         speed={1500}
         slidesPerView={1}
         navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         }}
         pagination={{ clickable: true }} // Clickable pagination dots
         loop={true} // Enable infinite looping
         autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Autoplay continues even after user interaction
         }}
         modules={[Navigation, Pagination, Autoplay]}
         className="mySwiper"
      >
         {/* Slides */}
         {
            sliderData.map(slider =>
               <SwiperSlide key={slider.id}>
                  <div className='flex justify-center h-64 sm:h-96  w-full items-center'>
                     <div className='space-x-2 sm:space-y-4'>
                        <p className='text-violet-300 text-md sm:text-3xl font-semibold'>{slider.title}</p>
                        <p className='font-light text-xs text-gray-400'>{slider.description}</p>
                     </div>
                  </div>
               </SwiperSlide>)
         }
         {/* Navigation Buttons */}
         <div className="swiper-button-next"></div>
         <div className="swiper-button-prev"></div>
      </Swiper>
   );
};

export default SwiperSlider;
