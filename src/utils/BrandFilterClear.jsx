import React from "react";
import { useData } from "../Context";

const BrandFilterClear = () => {
  const { addSliderFilter, slider, selectedFilter, addFilterBrand,
    filterBrand, } = useData();

  const handleBrandClear = () => {
    selectedFilter.pop("rating");
    addFilterBrand(prev=> [...prev,[]]);
  };

  return (
    <div>
      <button onClick={() => handleBrandClear()} className="text-green-300">
        clear{" "}
      </button>
    </div>
  );
};

export default BrandFilterClear;
