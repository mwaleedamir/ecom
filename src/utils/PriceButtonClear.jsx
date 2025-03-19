import React from "react";
import { useData } from "../Context";

const PriceButtonClear = () => {
  const {
    selectedFilter,
    addPriceFilter,
  } = useData();

  const handlePriceClear = () => {
    selectedFilter.pop("price");
    addPriceFilter({
      minPrice: "",
      maxPrice: ""
    });
  };

  return (
    <div>
      <button onClick={() => handlePriceClear()} className="text-green-300 hover:text-green-400 cursor-pointer">
        clear{" "}
      </button>
    </div>
  );
};

export default PriceButtonClear;
