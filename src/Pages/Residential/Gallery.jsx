import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
// images
import gallery_img1 from '../../assets/image-33-copyright.jpg'
import gallery_img2 from '../../assets/image-38-copyright.jpg'
import gallery_img3 from '../../assets/image-42-copyright.jpg'


const Gallery = () => {
   return (
      <>
         <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper2"
         >
            <SwiperSlide>
               <img src={gallery_img1} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={gallery_img2} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={gallery_img3} />
            </SwiperSlide>
         </Swiper>
      </>
   );
};

export default Gallery;