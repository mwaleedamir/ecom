import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../Context";
import PriceFilter from "../utils/PriceFilter";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";
import RatingFilter from "../utils/RatingFilter";
import PriceButtonClear from "../utils/PriceButtonClear";
import BrandFilter from "../utils/BrandFilter";

const Filters = () => {
  const {
    selectedFilter,
  } = useData();

  
  const [activeDropdown, setActiveDropdown] = useState(null);


  const handleToggle = (filter) => {
    setActiveDropdown((prev) => (prev === filter ? null : filter));
  };

  return (
    <div className="flex items-center gap-4 mx-5 my-10 relative">
      {selectedFilter.map((list) => (
        <button
          key={uuidv4()}
          onClick={() => handleToggle(list)} 
          className="flex items-center relative justify-between px-5 py-1 rounded-md border-1 border-blue-400 bg-blue-100"
        >
          {list === "price" && (
            <div className="flex justify-between gap-3 items-center px-2">
              <MdOutlinePriceChange />
              <p>Price ( AED )</p>
              {activeDropdown === "price" ? <FaChevronUp /> : <FaChevronDown />}
              {activeDropdown === "price" && (
                <div className="absolute bg-white w-64 h-40 top-[100%] left-0 px-3 mt-2 shadow-xl rounded-md">
                  <div className="flex justify-between px-3 py-2">
                    <p>Price</p>
                    <PriceButtonClear />
                  </div>
                  <PriceFilter />
                </div>
              )}
            </div>
          )}

          {list === "rating" && (
            <div className="flex justify-between items-center px-2 gap-2 ">
              <p>Rating</p>
              {activeDropdown === "rating" ? <FaChevronUp /> : <FaChevronDown />}
              {activeDropdown === "rating" && (
                <div className="absolute bg-white w-64 h-40 top-[100%] left-0 px-3 mt-2 shadow-xl rounded-md">
                  <div className="flex justify-between px-3 py-2">
                    <p>Ratings</p>
                  </div>
                  <RatingFilter />
                </div>
              )}
            </div>
          )}

          {list === "brand" && (
            <div className="flex justify-between items-center px-2 gap-2 ">
              <p>Brands</p>
              {activeDropdown === "brand" ? <FaChevronUp /> : <FaChevronDown />}
              {activeDropdown === "brand" && (
                <div className="absolute bg-white w-64 h-auto top-[100%] left-0 px-3 mt-2 shadow-xl rounded-md">
                  <div className="flex justify-between px-3 py-2">
                    <p>Brands</p>
                  </div>
                  <BrandFilter />
                </div>
              )}
            </div>
          )}

        </button>
      ))}
    </div>
  );
};

export default Filters;
