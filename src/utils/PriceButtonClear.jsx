import React from "react";
import { useData } from "../Context";

const PriceButtonClear = () => {
  const {
    selectedFilter,
    addPriceFilter,
  } = useData();

  const handlePriceClear = () => {
    console.log("before",selectedFilter)
    selectedFilter.pop("price");
    console.log("after",selectedFilter)
    addPriceFilter({
      minPrice: "",
      maxPrice: ""
    });
  };

  return (
    <div>
      <button onClick={() => handlePriceClear()} className="text-green-300">
        clear{" "}
      </button>
    </div>
  );
};

export default PriceButtonClear;
