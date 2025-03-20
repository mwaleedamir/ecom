import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState({
    minPrice: "",
    maxPrice: ""
  });
  const [rating, setRating] = useState(0);

  const [checkBoxes, setCheckBoxes] = useState([
    { brand: "PUMA", isChecked: false },
    { brand: "Adidas", isChecked: false },
    { brand: "Nike", isChecked: false },
    { brand: "Generic", isChecked: false }
  ]);
  const [filterBrand, setFilterBrand] = useState([]);

  const handleAddFilter = newFilter => {
    if (!selectedFilter.includes(newFilter)) {
      setSelectedFilter(prev => [...prev, newFilter]);
    }
  };

  const clearPriceFilter = () => {
    setSelectedFilter(prev => prev.filter(pre => pre !== "price"));
    setPriceFilter(prev => ({ ...prev, minPrice: "", maxPrice: "" }));
  };

  const clearRatingFilter = () => {
    setRating(0);
    setSelectedFilter(prev => prev.filter(pre => pre !== "rating"));
  };

  const toggleCheckbox = (brandName, checked) => {
    setCheckBoxes(prev =>
      prev.map(
        item =>
          item.brand === brandName
            ? { ...item, isChecked: !item.isChecked }
            : item
      )
    );
    if (!checked) {
      handleAddFilter("brand");
      addFilterBrand(brandName);
      console.log("brandName is !checked", brandName, checked);
    } else {
      setFilterBrand(prev => {
        const updatedFilterBrand = prev.filter(item => item !== brandName);
        if (updatedFilterBrand.length === 0) {
          setSelectedFilter(prev => prev.filter(pre => pre !== "brand"));
        }
        return updatedFilterBrand;
      });
    }
  };

  const resetCheckboxes = () => {
    setSelectedFilter(prev => prev.filter(pre => pre !== "brand"));
    setCheckBoxes(prev => prev.map(item => ({ ...item, isChecked: false })));
    setFilterBrand([]);
  };

  const addFilterBrand = brand => {
    if (brand) {
      setFilterBrand(prev => [...prev, brand]);
    } else {
      setFilterBrand([]);
    }
  };
  const value = {
    selectedFilter,
    handleAddFilter,
    setSelectedFilter,
    priceFilter,
    setPriceFilter,
    addFilterBrand,
    filterBrand,
    rating,
    setRating,
    checkBoxes,
    toggleCheckbox,
    resetCheckboxes,
    clearPriceFilter,
    clearRatingFilter
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
