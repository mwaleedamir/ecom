import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Filters = () => {
  const [toggle, setToggle] = useState(false);

  const funcToggle = () => {
    setToggle(!toggle);
  };

  const lists = [
    { id: 1, name: "Generic" },
    { id: 2, name: "Adidas" },
    { id: 3, name: "Nike" },
    { id: 4, name: "Shoes" }
  ];
  return (
    <div className="flex  items-center gap-4 mx-5 my-10 ">
      {lists.map(list =>
        <button
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
