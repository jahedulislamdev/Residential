import Testomonial from '../Slider/Testomonial';
import Estate from './Estate';
import Gallery from './Gallery';
import { FaQuoteRight } from "react-icons/fa";
const Residential = () => {
   return (
      <>
         <div className='px-3 gap-x-7 py-10 md:grid grid-cols-5 justify-center items-center bg-[#5d3f6a2e]'>
            <div className='space-y-3 col-span-3'>
               <h1 className='text-5xl leading-snug lg:leading-tight font-semibold'>Introducing A New <span className='text-yellow-600'>Residential Complex</span></h1>
               <p className='font-semibold text-2xl'>Luxury Apartments</p>
               <p className='font-light text-sm text-pretty'>Each apartment has been individually designed to maximise space and light. Smart Home Technology installed as standard in each apartment putting you in total control of your home at the touch of a button from wherever you might be.</p>
            </div>
            <div className='mt-10 col-span-2'>
               <Gallery />
            </div>
         </div>
         <div>
            <Estate />
         </div>
         <div className='my-9'>
            <p className='flex justify-center my-3'><FaQuoteRight className='size-7' /></p>
            <p className='text-center text-2xl text-violet-300 font-semibold mb-9'>Some Reviews</p>
            <Testomonial />
         </div>
      </>
   );
};

export default Residential;