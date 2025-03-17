import React, { createContext, useState, useContext } from 'react';
// import { v4 as uuidv4 } from "uuid";

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
  const [priceFilter ,setPriceFilter ] =useState({
    minPrice:"",
    maxPrice:"",
  })
  const [slider ,setSlider ]= useState({rating:""})
  // , id:uuidv4()

  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, { ...newItem}]);
  };

  const filters = (newFilter) =>{
    if(!selectedFilter.includes(newFilter)){
      setSelectedFilter(selectedFilter => 
        [ ...selectedFilter,  newFilter ])
      }
  }
 
  const addFilteredItems = (newItems) => {
    setFilteredItems(prevItems => [...prevItems,{...newItems }])
  }

  const addPriceFilter =(Price) =>{
    setPriceFilter(prevprice => ({ ...prevprice , minPrice: Price.minPrice , maxPrice: Price.maxPrice}))
  }

  const addSliderFilter = (slide) => {
    setSlider(prev => ({...prev , rating:slide}))
  }
  const value = {
    items,
    addItem,
    selectedFilter,
    filters,
    filteredItems,
    addFilteredItems,
    priceFilter,
    addPriceFilter,
    addSliderFilter,
    slider
  };
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};