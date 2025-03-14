import React, { useEffect, useState } from "react";
import i1 from "../assets/i1.jpg";
import nike1 from "../assets/nike1.jpg";
import nike2 from "../assets/nike2.jpg";
import nike3 from "../assets/nike3.jpg";
import nike4 from "../assets/nike4.jpg";
import nike6 from "../assets/nike6.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import Cards from "../utils/Cards";
import { useData } from "../CreateCart";


const Cards2 = () => {
  // const [filter, setFilter]= useState([])
    const { 
        items, 
        addItem,
        selectedFilter,
      } = useData();

      console.log("selectedFilter",selectedFilter)

    console.log("carts in cards ",items)
   
  const cards = [
    {
      id: 1,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 2,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike2,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 3,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike3,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 4,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike4,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 5,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 6,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g2,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 7,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g3,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 8,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g4,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 9,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g5,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 10,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike6,
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
      img: a1,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 13,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a2,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      id: 14,
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a3,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    }
  ];

  useEffect(()=>{
    addItem(cards[0])
  },[])

  // const filteredarray = cards.filter((card) => {
  //   const matchingFilter = selectedFilter.find((filter) => filter.id === card.id);
  //   return matchingFilter ? card.price <= matchingFilter.maxPrice : false;
  // });

  const filteredarray = cards.filter((card) => card.price <= selectedFilter)

  console.log("filtered array ",filteredarray)
  console.log("selcted ",selectedFilter[0]?.minPrice)
  const className = { className: "p-2 grid grid-cols-5 gap-3 " };
  return (
    <div className="bg-gray-100">
      <Cards className={className} cards={cards} />
    </div>
  );
};

export default Cards2;
