import React, { createContext, useEffect, useState } from 'react';

export const ContextProvider = createContext();
const DataProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);
   const [estate, setEstate] = useState([]);
   // if (loading) {
   //    return <div className='flex justify-center items-center h-screen'><span className="loading loading-spinner loading-lg"></span></div>
   // }
   //load estates data
   useEffect(() => {
      setLoading(true)
      fetch("/fakeData.json")
         .then(res => res.json())
         .then(data => setEstate(data))
         .catch(err => {
            alert("Faild to load data", err)
            setLoading(false)
         })
   }, [])
   const data = { estate, setEstate, loading, setLoading }
   return (
      <ContextProvider.Provider value={data}>
         {children}
      </ContextProvider.Provider>
   );
};

export default DataProvider;