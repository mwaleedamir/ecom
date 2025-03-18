import React, { useCallback, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import PriceButtonClear from "./PriceButtonClear";
import BrandFilter from "./BrandFilter";
import SliderFilterClear from "./SliderFilterClear";
import BrandFilterClear from "./BrandFilterClear";

const SidebarItems = ({ name }) => {
  const [toggle, setToggle] = useState(false);

  const funcToggle = useCallback(() => {
    setToggle(prev => !prev);
  }, []);

  return (
    <div className="pb-5">
      <div onClick={funcToggle} className="flex justify-between items-center">
        <p className="font-bold">
          {name}
        </p>

        <div className="flex gap-3 items-center">
          {(name === "price" && <PriceButtonClear />) ||
            (name === "rating" && <SliderFilterClear />) ||
            (name === "brand" && <BrandFilterClear />)}
          <button className="flex flex-col justify-between">
            {toggle ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      {toggle && name === "price" && <PriceFilter />}
      {toggle && name === "rating" && <RatingFilter />}
      {toggle && name === "brand" && <BrandFilter />}
    </div>
  );
};

export default SidebarItems;
