import React from "react";
import { useData } from "../Context";

const SliderFilterClear = () => {
  const { addSliderFilter, slider, selectedFilter } = useData();

  const handleRatingClear = () => {
    console.log("before", selectedFilter);
    selectedFilter.pop("rating");
    console.log("after", selectedFilter);
    addSliderFilter(0);
  };

  return (
    <div>
      <button onClick={() => handleRatingClear()} className="text-green-300">
        clear{" "}
      </button>
    </div>
  );
};

export default SliderFilterClear;
