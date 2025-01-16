import React, { useContext } from 'react';
import { ContextProvider } from '../../Provider/DataProvider';
import { useParams } from 'react-router-dom';

const EstateDetail = () => {
   const { estate, setLoading } = useContext(ContextProvider)
   const { id } = useParams()
   const findEstaeDetailById = estate?.find((stateId) => stateId.id === parseInt(id));
   if (!findEstaeDetailById) {
      return <div className='flex justify-center items-center h-64 text-xl font-medium text-violet-300'>Sorry! This Property is Not exist</div>
   }
   return (
      <div className='md:grid grid-cols-2 gap-x-7 p-7 border-b border-violet-400 rounded m'>
         <div>
            <img className='rounded' src={findEstaeDetailById.image} alt="" />
         </div>
         <div className='bg-[#513a5d42]'>
            <table class="table-auto border-collapse border border-gray-300 w-full">
               <tbody>
                  <tr>
                     <th colSpan={3} className='p-3 text-2xl text-violet-300'>{findEstaeDetailById.estate_title}</th>
                  </tr>
                  <tr>
                     <th className='border p-3 text-left'>Segment</th>
                     <td className='border p-3'>{findEstaeDetailById.segment_name}</td>
                  </tr>
                  <tr>
                     <th className='border p-3 text-left'>Area</th>
                     <td className='border p-3'>{findEstaeDetailById.area}</td>
                  </tr>
                  <tr>
                     <th className='border p-3 text-left'>Status</th>
                     <td className='border p-3'>{findEstaeDetailById.status}</td>
                  </tr>
                  <tr>
                     <th className='border p-3 text-left whitespace-nowrap'>Additional Info</th>
                     <td className='border p-3'>{findEstaeDetailById.additional_info}</td>
                  </tr>
                  <tr>
                     <th className='border p-3 text-left'>Facilities</th>
                     <td className='border p-3'>{findEstaeDetailById.facilities}</td>
                  </tr>
                  <tr>
                     <th className=' p-3 text-left hidden md:block'>Description</th>
                     <td colSpan={2} className='border p-3 text-balance'>{findEstaeDetailById.detailed_description}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default EstateDetail;