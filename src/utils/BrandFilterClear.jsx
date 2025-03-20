import React from "react";
import { useData } from "../Context";

const BrandFilterClear = () => {
  const { resetCheckboxes } = useData();

  const handleBrandClear = () => {
    resetCheckboxes();
  };

  return (
    <div>
      <button
        onClick={() => handleBrandClear()}
        className="text-green-300 cursor-pointer hover:text-green-400"
      >
        clear{" "}
      </button>
    </div>
  );
};

export default BrandFilterClear;
