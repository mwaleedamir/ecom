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
import { useData } from "../Context";

const SecondPageCards = () => {
  const [filteredArray, setFilterArray] = useState([]);

  const {
    addItem,
    selectedFilter,
    priceFilter,
    slider,
    filterBrand
  } = useData();

  console.log({selectedFilter})
  console.log({priceFilter})

  const cards = [
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike1,
      price: 12,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 0.5,
      brand: "nike"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike2,
      price: 89,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 1,
      brand: "nike"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike3,
      price: 90,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 1.5,
      brand: "adidas"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike4,
      price: 40,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 2,
      brand: "adidas"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g1,
      price: 10,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 2.5,
      brand: "generic"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g2,
      price: 20,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 3,
      brand: "generic"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g3,
      price: 21,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 3.5,
      brand: ""
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g4,
      price: 50,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 4,
      brand: "puma"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: g5,
      price: 40,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 4,
      brand: "puma"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: nike6,
      price: 30,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 3.5,
      brand: "generic"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: i1,
      price: 28,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 3,
      brand: "generic"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a1,
      price: 58,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 2.5,
      brand: "generic"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a2,
      price: 78,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 2,
      brand: "adidas"
    },
    {
      desc: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum,",
      img: a3,
      price: 70,
      uprice: 23,
      persent: "60%",
      link: "/filter",
      rating: 2,
      brand: "adidas"
    }
  ];

  useEffect(() => {
    addItem(cards[0]);
  }, []);

  useEffect(
    () => {
      if (selectedFilter.length <= 0) {
        setFilterArray(cards);
      }
      if (selectedFilter.includes("price")) {
        setFilterArray(
           cards.filter(
                card =>
                  card.price >= priceFilter.minPrice &&
                  card.price <= priceFilter.maxPrice
              )
        )
      }
      if (selectedFilter.includes("rating")) {
        setFilterArray(
         cards.filter(card => Number(card.rating) === Number(slider))
        );
      }
      if (selectedFilter.includes("brand")) {
        
        setFilterArray(
         cards.filter(item => filterBrand.includes(item.brand))
        )

      }
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
