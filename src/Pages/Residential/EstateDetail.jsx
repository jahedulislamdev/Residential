import React, { useContext } from 'react';
import { ContextProvider } from '../../Provider/DataProvider';
import { useParams } from 'react-router-dom';

const EstateDetail = () => {
   const { estate, setLoading } = useContext(ContextProvider)
   const { id } = useParams()
   const findEstaeDetailById = estate?.find((stateId) => stateId.id === parseInt(id));
   if (!findEstaeDetailById) {
      return setLoading(true)
   }
   return (
      <div>
         <img src={findEstaeDetailById.image} alt="" />
      </div>
   );
};

export default EstateDetail;