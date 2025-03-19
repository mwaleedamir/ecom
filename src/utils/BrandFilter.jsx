import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { useData } from "../Context";
import { v4 as uuidv4 } from "uuid";

const BrandFilter = () => {
  const [findBrand ,setfindBrand] =useState("")
  const [toLowerCaseBrands, setToLowerCaseBrands] =useState([])
  const [checked ,setChecked ] =useState([])
  const {
    filters,
    addFilterBrand,
    filterBrand,
    addselected,
  } = useData();

  const checkboxs = [
    { brand: "PUMA" ,},
    { brand: "Adidas" , },
    { brand: "Nike" , },
    { brand: "Generic" ,},
  ];

  const onSearchClick = (brand) =>{
    setToLowerCaseBrands((prev) =>
    [...prev,brand.toLowerCase()])
  }

  const selectCheckbox = (brand) => {
    addFilterBrand(brand)
    filters("brand")
    console.log("brand",brand)
    console.log("brand details",checked)
    console.log("brafilterBrand details",filterBrand)
  }
  
  useEffect((brand)=>{
    setChecked((prev)=>
      [...prev, brand] 
    )
  },[filterBrand])
  console.log("filterBrand details",filterBrand)

  return (
    <div>
          <div className="flex items-center border-2 border-gray-100 font-extralight rounded-md px-2 gap-2 my-3 py-2">
            <button onClick={onSearchClick}>
              <BsSearch />
            </button>
            <input
              value={findBrand}
              onChange={e => setfindBrand(e.target.value)}
              className="border-0 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>
          <div>
            {checkboxs
              .filter(check =>
                check.brand.toLowerCase().includes(findBrand.toLowerCase())
              )
              .map(check =>
                <div key={uuidv4()} className="flex gap-3 py-2 px-3">
                  <input
                    className="text-2xl"
                    type="checkbox"
                    name="brand"
                    value={check.brand}
                    // checked={check}
                    onChange={() => selectCheckbox(check.brand.toLowerCase())}
                  />
                  <p className="font-extralight">
                    {check.brand}
                  </p>
                </div>
              )}
          </div>
        </div>
  )
}

export default BrandFilter
