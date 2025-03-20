import React from "react";
import { useData } from "../Context";

const PriceButtonClear = () => {
  const { clearPriceFilter } = useData();

  const handlePriceClear = () => {
    clearPriceFilter()
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
