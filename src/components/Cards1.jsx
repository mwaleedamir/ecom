import React from "react";
import i1 from "../assets/i1.jpg";
import Cards from "../utils/Cards";

const Cards1 = () => {
  const cards = [
    {
      id: 1,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 2,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 3,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 4,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 5,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 6,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 7,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 8,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 9,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 10,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 11,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 12,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    }
  ];

  const className = { className: "p-2 grid grid-cols-6 gap-3 " };

  return (
    <div className="bg-gray-100">
      <Cards cards={cards} className={className} />
    </div>
  );
};

export default Cards1;
