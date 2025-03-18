import React, { useEffect, useState } from "react";
import { useData } from "../Context";

const PriceFilter = () => {
  const [price, setPrice] = useState({
    minPrice: "",
    maxPrice: ""
  });

  const { filters, addPriceFilter,priceFilter } = useData();

  const handleClick = () => {
    addPriceFilter(price);
    filters("price");
  };

  useEffect(()=>{
    setPrice(priceFilter)
  },[priceFilter])

  return (
    <div>
      <div className="flex justify-between items-center gap-2 mt-3">
        <input
        
          type="number"
          value={price.minPrice }
          onChange={e =>
            setPrice(prev => ({ ...prev, minPrice: e.target.value }))}
          className="rounded-md w-20 border-gray-100 border-2 outline-0 px-2"
          placeholder="10"
        />
        <p>To</p>
        <input
          type="number"
          value={price.maxPrice}
          onChange={e =>
            setPrice(prev => ({ ...prev, maxPrice: e.target.value }))}
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
