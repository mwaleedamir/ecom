import React from "react";
import { useData } from "../Context";

const PriceFilter = () => {
  const {
    priceFilter,
    handleAddFilter,
    setPriceFilter,
    setSelectedFilter
  } = useData();

  const handleClick = () => {
    if (priceFilter.minPrice > 0 || priceFilter.maxPrice > 0) {
      handleAddFilter("price");
    } else {
      setSelectedFilter(prev => prev.filter(pre => pre !== "price"));
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-2 mt-3">
        <input
          type="number"
          value={priceFilter.minPrice >= 0 ? priceFilter.minPrice : 0}
          onChange={e =>
            setPriceFilter(prev => ({ ...prev, minPrice: e.target.value }))}
          className="rounded-md w-20 border-gray-100 border-2 outline-0 px-2"
          placeholder="0"
        />
        <p>To</p>
        <input
          type="number"
          value={priceFilter.maxPrice >= 0 ? priceFilter.maxPrice : 0}
          onChange={e =>
            setPriceFilter(prev => ({ ...prev, maxPrice: e.target.value }))}
          className="rounded-md w-20 border-gray-100 border-2 outline-0 px-2"
          placeholder="100"
        />
        <button
          onClick={() => handleClick()}
          className="px-3 py-1  rounded text-blue-500"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
