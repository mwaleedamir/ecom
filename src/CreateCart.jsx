import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";

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
  const [filteredItems ,setFilteredItems ]= useState([])
  
  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, { ...newItem, id:uuidv4()}]);
  };

  const filters = (newFilter) =>{
    setSelectedFilter(selectedFilter => 
    [ ...selectedFilter,  {...newFilter }])
  }

  const addFilteredItems = (newItems) => {
    setFilteredItems(prevItems => [...prevItems,{...newItems ,id:uuidv4()}])
  }

  const value = {
    items,
    addItem,
    selectedFilter,
    filters,
    filteredItems,
    addFilteredItems,
  };
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};