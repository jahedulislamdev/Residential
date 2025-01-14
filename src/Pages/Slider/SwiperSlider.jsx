import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'

const SwiperSlider = () => {
   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={1}
         navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         }}
         pagination={{ clickable: true }} // Clickable pagination dots
         loop={true} // Enable infinite looping
         // autoplay={{
         //    delay: 2500, // Delay between slides in milliseconds
         //    disableOnInteraction: false, // Autoplay continues even after user interaction
         // }}
         modules={[Navigation, Pagination, Autoplay]} // Include necessary modules
         className="mySwiper"
      >
         {/* Slides */}
         <SwiperSlide>Slide 1</SwiperSlide>
         <SwiperSlide>Slide 2</SwiperSlide>
         <SwiperSlide>Slide 3</SwiperSlide>
         <SwiperSlide>Slide 4</SwiperSlide>
         {/* Navigation Buttons */}
         <div className="swiper-button-next"></div>
         <div className="swiper-button-prev"></div>
      </Swiper>
   );
};

export default SwiperSlider;
