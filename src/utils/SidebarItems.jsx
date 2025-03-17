import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { useData } from "../Context";
import { v4 as uuidv4 } from "uuid";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

const SidebarItems = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const [filterBrand, setFilterBrand] = useState("");

  const {
    filters,
    selectedFilter,
    addFilteredItems,
    filteredItems,
    addPriceFilter,
    priceFilter
  } = useData();

  const funcToggle = useCallback(() => {
    setToggle(prev => !prev);
  }, []);

  const checkboxs = [
    { brand: "PUMA" },
    { brand: "Adidas" },
    { brand: "Nike" },
    { brand: "Generic" }
  ];

  return (
    <div className="pb-5">
      <div onClick={funcToggle} className="flex justify-between items-center">
        <p className="font-bold">
          {name}
        </p>
        <button className="flex flex-col justify-between">
          {toggle ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {toggle && name === "price" && <PriceFilter />}
      {toggle && name === "rating" && <RatingFilter />}

      {toggle &&
        name === "brand" &&
        <div>
          <div className="flex items-center border-2 border-gray-100 font-extralight rounded-md px-2 gap-2 my-3 py-2">
            <button>
              <BsSearch />
            </button>
            <input
              value={filterBrand}
              onChange={e => setFilterBrand(e.target.value)}
              className="border-0 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            {checkboxs
              .filter(check =>
                check.brand.toLowerCase().includes(filterBrand.toLowerCase())
              )
              .map(check =>
                <div key={uuidv4()} className="flex gap-3 py-2 px-3">
                  <input
                    className="text-2xl"
                    type="checkbox"
                    name="brands"
                    value={check.brand}
                    checked={details.brands.includes(check.brand)}
                    onChange={() => selectCheckbox(check.brand)}
                  />
                  <p className="font-extralight">
                    {check.brand}
                  </p>
                </div>
              )}
          </div>
        </div>}
    </div>
  );
};

export default SidebarItems;
