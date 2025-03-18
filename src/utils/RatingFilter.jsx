import React, { useEffect, useState } from "react";
import { useData } from "../Context";

const RatingFilter = () => {
  const [rating, setRating] = useState(0);

  const { filters, addSliderFilter, slider } = useData();

  const handleSelect = () => {
    filters("rating");
    addSliderFilter(rating);
  };
  
  useEffect(() => {
    setRating(slider);
  }, [slider]);

  return (
    <div className="p-4 w-full">
      <p className="text-sm text-green-500">
        {slider} stars or more
      </p>
      <input
        type="range"
        className="w-full h-6 bg-gray-300 outline-none opacity-70 transition-opacity duration-200 hover:opacity-100 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-green-500 [&::-moz-range-thumb]:cursor-pointer"
        value={rating}
        min={0}
        max={4}
        step={0.5}
        // defaultValue={0}
        onChange={e => setRating(e.target.value)}
        onMouseUp={handleSelect}
      />
    </div>
  );
};

export default RatingFilter;
