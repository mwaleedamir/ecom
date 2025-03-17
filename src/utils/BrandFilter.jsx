import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const BrandFilter = () => {

  const selectCheckbox = (brand) => {
    const checkboxs = [
      { brand: "PUMA" },
      { brand: "Adidas" },
      { brand: "Nike" },
      { brand: "Generic" },
    ];
    setDetails((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((item) => item !== brand)
        : [...prev.brands, brand],
    }));

    if (details) {
      filters(details);
    }
  };
  return (
    <div>
      
    </div>
  )
}

export default BrandFilter
