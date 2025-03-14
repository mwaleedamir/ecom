import React from 'react'
import { Link } from "react-router-dom";
import { useData } from "../CreateCart";

const Cards = ({cards, className}) => {
  const { 
    items, 
    addItem,
    filters,
    selectedFilter,
    } = useData();
  return (
    <div>
      <div className={className.className}>
        {cards.map(card =>
          <Link to={card.link} className=" rounded-md bg-white self-center " key={card.id}>
            <img  className="h-[70%] p-1 " src={card.img} alt="Card Image" />
            <p className="text-sm px-1">
              {card.desc}
            </p>
            <div className="flex justify-start gap-1 px-2 items-center ">
            <p className="text-sm font-extralight py-2">AED </p>
            <p className="font-bold">{card.price}</p>
            <p className="line-through font-extralight">{card.uprice}</p>
            <p className="text-green-200">{card.persent}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Cards
