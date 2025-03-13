import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

const Closeup = ({ key, name }) => {
  const [toggle, setToggle] = useState(false);

  const funcToggle = () => {
    setToggle(!toggle);
  };

  const checkboxs = [
    {id:1 , name:"PUMA"},
    {id:2 , name:"Adidas"},
    {id:3 , name:"Nike"},
    {id:4 , name:"Generic"},
  ]

  return (
    <div className="pb-5 ">
      <div onClick={() => funcToggle()} className="flex justify-between items-center">
        <p className="font-bold">
          {" "}{name}{" "}
        </p>
        <button
          className="flex flex-col justify-between"
          
        >
          {toggle ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {toggle &&
        name === "price" &&
        <div className="flex justify-between items-center gap-2 mt-3 ">
          <input
            className="rounded-md w-20 border-gray-100 border-2 outline-0 px-2"
            type="text"
            placeholder="5"
          />
          <p>To</p>
          <input
            className="rounded-md w-20 border-gray-100 border-2 outline-0  px-2"
            type="text"
            placeholder="1000"
          />
          <button>Go</button>
        </div>}

      {toggle &&
        name === "brand" &&
        <div>
          <div className="flex  items-center border-2 border-gray-100 font-extralight rounded-md px-2 gap-2 my-3 py-2">
            <BsSearch />
            <input className="border-0 outline-0" type="text" placeholder="Search" />
          </div>
          <div>
            {checkboxs.map((check) =>(
                <div key={check.id} className="flex gap-3 py-2 px-3 ">
                <input className="text-2xl" type="checkbox" name=""  id="" />
                <p className="font-extralight">{check.name}</p>
                </div>
            ))}
          </div>
        </div>}
    </div>
  );
};

export default Closeup;
