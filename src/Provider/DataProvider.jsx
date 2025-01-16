import React, { createContext, useEffect, useState } from 'react';

export const ContextProvider = createContext();
const DataProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(false);
   const [estate, setEstate] = useState([]);

   // Load estates data
   useEffect(() => {
      setLoading(true);
      fetch("/fakeData.json")
         .then(res => res.json())
         .then(data => {
            setEstate(data);
            setLoading(false);
         })
         .catch(err => {
            alert("Failed to load data");
            setLoading(false);
         });
   }, []);
   const data = { estate, setEstate, loading, setLoading, user, setUser };
   return (
      <ContextProvider.Provider value={data}>
         {children}
      </ContextProvider.Provider>
   );
};

export default DataProvider;
