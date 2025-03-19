import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useData } from "../Context";
import { v4 as uuidv4 } from "uuid";

const BrandFilter = () => {
  const [findBrand, setfindBrand] = useState("");
  const { checkBoxes, toggleCheckbox } = useData();

  return (
    <div>
      <div className="flex items-center border-2 border-gray-100 font-extralight rounded-md px-2 gap-2 my-3 py-2">
        <button>
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
        {checkBoxes
          .filter(check =>
            check.brand.toLowerCase().includes(findBrand.toLowerCase())
          )
          .map(check =>
            <div key={uuidv4()} className="flex gap-3 py-2 px-3">
              <input
                className="text-2xl"
                type="checkbox"
                name="brand"
                value={check}
                checked={check.isChecked}
                onChange={() => toggleCheckbox(check.brand, check.isChecked)}
              />
              <p className="font-extralight">
                {check.brand}
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default BrandFilter;
