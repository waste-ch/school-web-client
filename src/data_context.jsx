// DataContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a new context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [token, setToken] = useState({});

  return (
    <DataContext.Provider value={{ data, setData, token, setToken }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the context
export const useData = () => {
  return useContext(DataContext);
};
