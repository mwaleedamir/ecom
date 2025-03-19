import React from "react";
import { useData } from "../Context";

const SliderFilterClear = () => {
  const { addSliderFilter, selectedFilter } = useData();

  const handleRatingClear = () => {
    selectedFilter.pop("rating");
    addSliderFilter(0);
  };

  return (
    <div>
      <button onClick={() => handleRatingClear()} className="text-green-300 hover:text-green-400 cursor-pointer">
        clear{" "}
      </button>
    </div>
  );
};

export default SliderFilterClear;
