import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { useData } from "../CreateCart";
import { v4 as uuidv4 } from "uuid";

const Closeup = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const [filterBrand, setFilterBrand] = useState("");
  const [details, setDetails] = useState({
    brands: [],
    minPrice: "",
    maxPrice: "",
  });

  const { items, filters, selectedFilter ,addFilteredItems ,filteredItems } = useData();

  const funcToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const handleClick =() => {
  
   
      filters(details);
      // setDetails({
      //   brands: [],
      //   minPrice: "",
      //   maxPrice: "",
      // });
    
  };

 

  console.log("selectedFilter at close up ", selectedFilter);
  console.log("details at closeup ", details);

  const checkboxs = [
    { brand: "PUMA" },
    { brand: "Adidas" },
    { brand: "Nike" },
    { brand: "Generic" },
  ];

  const selectCheckbox = (brand) => {
    setDetails((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((item) => item !== brand)
        : [...prev.brands, brand],
    }));

    if (details) {
      filters(details);
      setDetails({
        brands: [],
        minPrice: "",
        maxPrice: "",
      });
    }
  };
    
  return (
    <div className="pb-5">
      <div onClick={funcToggle} className="flex justify-between items-center">
        <p className="font-bold">{name}</p>
        <button className="flex flex-col justify-between">
          {toggle ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {toggle && name === "price" && (
        <div className="flex justify-between items-center gap-2 mt-3">
          <input
            type="number"
            value={details.minPrice}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, minPrice: e.target.value }))}
            className="rounded-md w-20 border-gray-100 border-2 outline-0 px-2"
            placeholder="Min"
          />
          <p>To</p>
          <input
            type="number"
            value={details.maxPrice}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, maxPrice: e.target.value }))
            }
            className="rounded-md w-20 border-gray-100 border-2 outline-0 px-2"
            placeholder="Max"
          />
          <button onClick={()=>handleClick()} className="px-3 py-1  rounded">
            Go
          </button>
        </div>
      )}

      {toggle && name === "brand" && (
        <div>
          <div className="flex items-center border-2 border-gray-100 font-extralight rounded-md px-2 gap-2 my-3 py-2">
            <button>
              <BsSearch />
            </button>
            <input
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="border-0 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            {checkboxs
              .filter((check) =>
                check.brand.toLowerCase().includes(filterBrand.toLowerCase())
              )
              .map((check) => (
                <div key={uuidv4()} className="flex gap-3 py-2 px-3">
                  <input
                    className="text-2xl"
                    type="checkbox"
                    name="brands"
                    value={check.brand}
                    checked={details.brands.includes(check.brand)}
                    onChange={() => selectCheckbox(check.brand)}
                  />
                  <p className="font-extralight">{check.brand}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Closeup;
