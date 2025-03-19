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

  const [selectedFilter, setSelectedFilter] = useState([]);
  const [priceFilter ,setPriceFilter ] =useState({
    minPrice:"",
    maxPrice:"",
  })
  const [slider ,setSlider ]= useState(0)
  
  const [checkBoxes, setCheckBoxes] = useState([
    { brand: "PUMA", isChecked: false },
    { brand: "Adidas", isChecked: false },
    { brand: "Nike", isChecked: false },
    { brand: "Generic", isChecked: false }
  ]);
  const [filterBrand, setFilterBrand] = useState([])
  
  const filters = (newFilter) =>{
    if(!selectedFilter.includes(newFilter)){
      setSelectedFilter(selectedFilter => 
        [ ...selectedFilter,  newFilter ])
      }
  }
 
  const addPriceFilter =(Price) =>{
    setPriceFilter(prevprice => ({ ...prevprice , minPrice: Price.minPrice , maxPrice: Price.maxPrice}))
  }

  const addSliderFilter = (slide) => {
    setSlider(slide)
  }

  const toggleCheckbox = (brandName,checked) => {
    setCheckBoxes((prev) =>
      prev.map((item) =>
        item.brand === brandName
          ? { ...item, isChecked: !item.isChecked }
          : item
        )
      );
      let data
      if(!checked ){
        addFilterBrand(brandName)
        filters("brand")
      }else{
        data = filterBrand.pop(brandName);
        setFilterBrand(prev => [...prev,filterBrand]);
      }
    };
    
    const addFilterBrand = (brand) =>{
      setFilterBrand(prev=> [...prev , brand?.toLowerCase()])
      
    }
    
  const value = {
    selectedFilter,
    filters,
    priceFilter,
    addPriceFilter,
    addSliderFilter,
    addFilterBrand,
    filterBrand,
    slider,
    checkBoxes,
    toggleCheckbox
  };
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};