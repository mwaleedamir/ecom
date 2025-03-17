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
  const [ filteredArray,setFilterArray ] = useState(null)

    const { 
        items, 
        addItem,
        selectedFilter,
      } = useData();
   
  const cards = [
    {
    
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike1,
      price: 12,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {

      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike2,
      price: 89,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {

      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike3,
      price: 90,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
 
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike4,
      price: 40,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
   
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g1,
      price: 10,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
      
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g2,
      price: 20,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
  
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g3,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
     
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g4,
      price: 50,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
 
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g5,
      price: 40,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
    
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike6,
      price: 30,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
  
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 28,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {

      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a1,
      price: 58,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
    
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a2,
      price: 78,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    },
    {
     
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a3,
      price: 70,
      uprice: 23,
      persent: "60%",
      link: "/filter"
    }
  ];

  useEffect(()=>{
    addItem(cards[0])
  },[])


  
  // useEffect(()=>{
  //   setFilterArray(cards.filter((card) => card.price >= selectedFilter[0]?.minPrice && card.price <= selectedFilter[0]?.maxPrice))
  // },[selectedFilter])

  const className = { className: "p-2 grid grid-cols-5 gap-3" };

  return (
    <div className="bg-gray-100">
      {filteredArray ?
      <Cards className={className}  cards={filteredArray} />
    : <Cards className={className}  cards={cards} /> }
    </div>
  );
};

export default Cards2;
