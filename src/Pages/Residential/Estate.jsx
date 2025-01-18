import React, { useContext } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../Provider/DataProvider';
const Estate = () => {
   const { estate } = useContext(ContextProvider);
   return (
      <>
         <p className='text-center font-semibold text-violet-300 text-3xl py-5'>Recently Added</p>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center'>
            {
               estate.map(est =>
                  <div key={est.id} className="my-7 md:my-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                     <Link>
                        <img className="rounded-t-lg h-[250px] w-full object-cover" src={est.image} alt="" />
                     </Link>
                     <div className="p-3 space-y-3">
                        <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{est.estate_title}</h5>
                        <p className="mb-3 font-light text-gray-700 dark:text-gray-400 text-pretty text-sm" >{est.detailed_description.slice(0, 100) + "..."}</p>
                        <div className='flex justify-between'>
                           <p className='font-medium'>House For: <span className='text-blue-400 font-semibold uppercase'> {est.status}</span></p>
                           <p className='font-medium'>Price: <span className='text-blue-400 font-semibold uppercase'> {est.price}</span></p>
                        </div>                        <Link to={`/estate/${est.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-500 rounded ">
                           Estate Details
                           <GoArrowUpRight className='size-5' />
                        </Link>
                     </div>
                  </div>)
            }
         </div>
      </>
   );
};

export default Estate;