import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {

  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
  
  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, { ...newItem}]);
  };
  // id: Date.now() 
  const filters = (newFilter) =>{
    console.log("new Filter",newFilter)
    setSelectedFilter(selectedFilter => [
      ...selectedFilter, { ...newFilter }])
  }

  const value = {
    items,
    selectedFilter,
    filters,
    addItem,
  };
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};