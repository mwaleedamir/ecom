import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";

const Filters = () => {
  const [toggle, setToggle] = useState(false);

  const funcToggle = () => {
    setToggle(!toggle);
  };

  const lists = [
    {  name: "Generic" },
    {  name: "Adidas" },
    {  name: "Nike" },
    {  name: "Shoes" }
  ];
  return (
    <div className="flex items-center gap-4 mx-5 my-10 ">
      {lists.map(list =>
        <button key={uuidv4()}
          onClick={() => funcToggle()}
          className="flex items-center justify-between border-0 px-5 py-1 rounded-md bg-gray-100"
        >
          {list.name}
          {toggle && name === list.name && <RxCross1 />}
        </button>
      )}
    </div>
  );
};

export default Filters;
