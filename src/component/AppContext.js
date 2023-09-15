import React, { createContext, useContext, useState } from 'react';

// Create a context
const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [Url, setUrl] = useState(''); // Initialize the URL with an empty string

  return (
    <AppContext.Provider value={{ Url, setUrl }}>
      {children}
    </AppContext.Provider>
  );
};
