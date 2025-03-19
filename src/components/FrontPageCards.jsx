import React from "react";
import Cards from "../utils/Cards";
import { cards } from "../utils/CardsData";

const FrontPageCards = () => {

  const className = { className: "p-2 grid grid-cols-6 gap-3 " };
  return (
    <div className="bg-gray-100">
      <Cards cards={cards} className={className} />
    </div>
  );
};

export default FrontPageCards;
