import React, { useState } from "react";

const Carousel = () => {
   const images = [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjByZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1505819244306-ef53954f9648?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjByZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562235357-57c00cf7c441?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdXNlJTIwcmVudHxlbnwwfHwwfHx8MA%3D%3D",
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   // Handle Next Button
   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   };

   // Handle Prev Button
   const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
   };

   return (
      <div className="carousel rounded-box relative w-full max-w-xl mx-auto">
         {/* Previous Button */}
         <button
            className="btn btn-circle absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
            onClick={handlePrev}
         >
            ❮
         </button>

         {/* Carousel Items */}
         <div className="carousel-item flex justify-center h-96 w-full object-cover">
            <img
               src={images[currentIndex]}
               alt={`Slide ${currentIndex + 1}`}
               className="rounded-box"
            />
         </div>

         {/* Next Button */}
         <button
            className="btn btn-circle absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
            onClick={handleNext}
         >
            ❯
         </button>
      </div>
   );
};

export default Carousel;
