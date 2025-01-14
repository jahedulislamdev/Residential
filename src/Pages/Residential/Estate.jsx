import React, { useEffect, useState } from 'react';

const Estate = () => {
   const [estate, setEstate] = useState([]);
   useEffect(() => {
      fetch('/fakeData.json')
         .then(res => res.json())
         .then(data => setEstate(data))
   }, [])
   return (
      <div>
         <p>total {estate.length} property here</p>
      </div>
   );
};

export default Estate;