import React from "react";

import i1 from "../assets/i1.jpg";
import { Link } from "react-router-dom";

const Cards1 = () => {
  const cards = [
    { id: 1, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 2, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 3, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 4, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 5, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 6, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 7, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 8, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 9, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 10, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 11, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
    { id: 12, desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,", img: i1 , price:21 ,uprice :23, persent :'60%', link :'/filter'},
  ];

  return (
    <div className="bg-gray-100">
      
      <div className="p-2 grid grid-cols-6 gap-3 ">
        {cards.map(card =>
          <Link to={card.link} className=" rounded-md bg-white self-center " key={card.id}>
            <img  className="h-[70%] p-1 " src={card.img} alt="Card Image" />
            <p className="text-sm px-1">
              {card.desc}
            </p>
            <div className="flex justify-start gap-1 items-center ">
            <p className="text-sm font-extralight py-2">AED </p>
            <p className="font-bold">{card.price}</p>
            <p className="line-through">{card.uprice}</p>
            <p className="text-green-200">{card.persent}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cards1;
