import React from "react";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid"

const NavLinks = () => {
  const names = [
    { names: "Electronics ", Links: "/" },
    { names: "Man's Fashion ", Links: "/" },
    { names: "Womens Fashion ", Links: "/" },
    { names: "Kids Fashion ", Links: "/" },
    { names: "Home & Kitchen ", Links: "/" },
    { names: "Beauty & Fragrance ", Links: "/" },
    { names: "Baby ", Links: "/" },
    { names: "Toys ", Links: "/" },
    { names: "Suports & Outdoors ", Links: "/" }
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center font-medium text-sm px-3 py-2 ">
        {names.map(name =>
          <Link key={uuidv4()} className="" to={name.Links}>
            {name.names}
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
