import React, { useEffect, useState } from "react";
import Cards from "../utils/Cards";
import { useData } from "../Context";
import { cards } from "../utils/CardsData";
const SecondPageCards = () => {
  const [filteredArray, setFilterArray] = useState([]);

  const {
    selectedFilter,
    priceFilter,
    slider,
    filterBrand
  } = useData();


  useEffect(
    () => {
      let result = [...cards];

      if (selectedFilter.includes("price")) {
        result = result.filter(
          card =>
            card.price >= priceFilter.minPrice &&
            card.price <= priceFilter.maxPrice
        );
      }

      if (selectedFilter.includes("rating")) {
        result = result.filter(card => Number(card.rating) === Number(slider));
      }

      if (selectedFilter.includes("brand") && filterBrand.length > 0) {
        result = result.filter(item => filterBrand.includes(item.brand));
      }

      if (selectedFilter.length === 0) {
        result = cards;
      }

      setFilterArray(result);
    },
    [selectedFilter, slider, priceFilter, filterBrand]
  );

  const className = { className: "p-2 grid grid-cols-5 gap-3" };

  return (
    <div className="bg-gray-100">
      <Cards className={className} cards={filteredArray} />
    </div>
  );
};

export default SecondPageCards;
