import React from "react";
import { Link } from "react-router-dom";


const NavLinks = () => {
  const names = [
    { id: 1, names: "Electronics ", Links: "/" },
    { id: 2, names: "Man's Fashion ", Links: "/" },
    { id: 3, names: "Womens Fashion ", Links: "/" },
    { id: 4, names: "Kids Fashion ", Links: "/" },
    { id: 5, names: "Home & Kitchen ", Links: "/" },
    { id: 6, names: "Beauty & Fragrance ", Links: "/" },
    { id: 7, names: "Baby ", Links: "/" },
    { id: 8, names: "Toys ", Links: "/" },
    { id: 9, names: "Suports & Outdoors ", Links: "/" }
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center font-medium text-sm px-3 py-2 ">
        {names.map(name =>
          <Link className="" to={name.Links}>
            {name.names}
          </Link>
        )}
      </div>
      
    </div>
  );
};

export default NavLinks;
