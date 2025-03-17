import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../Context";
import PriceFilter from "../utils/PriceFilter";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";

const Filters = () => {
  const {
    items,
    addItem,
    selectedFilter,
    filters,
    filteredItems,
    addFilteredItems,
    priceFilter,
    addPriceFilter
  } = useData();

  const [toggle, setToggle] = useState(false);

  const handleClear = () => {
    addPriceFilter({
      minPrice: "",
      maxPrice: ""
    });
  };

  const funcToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <div className="flex items-center gap-4 mx-5 my-10 relative ">
      {selectedFilter.map(list =>
        <button
          key={uuidv4()}
          onClick={funcToggle}
          className="flex items-center justify-between px-5 py-1 rounded-md border-1 border-blue-400 bg-blue-100"
        >
          
          {list === "price" &&
            <div className="flex justify-between gap-3 items-center px-2 ">
              <MdOutlinePriceChange />
              <p>Price ( AED )</p>
              {toggle ? <FaChevronDown /> : <FaChevronUp />}
            </div>}
          {list === "rating" && 
          <div className="flex justify-between items-center px-2">
            <p>Rating</p>
            {toggle ? <FaChevronDown /> : <FaChevronUp />}
            </div>}
        </button>
      )}
      {toggle &&
        <div className=" absolute bg-white w-64 h-40 top-[100%] left-0 px-3 shadow-xl rounded-md">
          <div className="flex justify-between px-3 py-2">
            <p>Price </p>
            <button onClick={() => handleClear()} className="text-green-300">
              clear{" "}
            </button>
          </div>
          <PriceFilter />
        </div>}
    </div>
  );
};

export default Filters;
