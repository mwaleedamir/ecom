import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Cards = ({ cards, className, filteredArray }) => {
  return (
    <div className={className.className}>
      {cards.map(card =>
        <Link
          to={card.link}
          className=" rounded-md bg-white self-center "
          key={uuidv4()}
        >
          <img className="h-[70%] p-1 " src={card.img} alt="Card Image" />
          <p className="text-sm px-1">
            {card.desc}
          </p>
          <div className="flex justify-start gap-1 px-2 items-center ">
            <p className="text-sm font-extralight py-2">AED </p>
            <p className="font-bold">
              {card.price}
            </p>
            <p className="line-through font-extralight">
              {card.uprice}
            </p>
            <p className="text-green-200">
              {card.persent}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Cards;
