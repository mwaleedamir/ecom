import React from "react";
import c1 from "../assets/c1.gif";
import c2 from "../assets/c2.avif";
import c3 from "../assets/c3.avif";
import CarouselSlider from "../utils/CarouselSlider";
import fashion from "../assets/fashion.png";
import female from "../assets/female-fashion.png";
import hscb from "../assets/hsbc.avif";

const NavbarCarousel = () => {
  const images = [
    { img: c1, alt: "c1" },
    { img: c2, alt: "c2" },
    { img: c3, alt: "c3" }
  ];

  const slider = {
    autoplay: true,
    infiniteLoop: true,
    stopOnHover: true,
    showThumbs: false
  };

  const className = { className: " w-[100%]" };

  return (
    <div>
      <img src={hscb} alt="Hsbc" />

      <div className="flex items-center">
        <CarouselSlider
          className={className.className}
          slider={slider}
          images={images}
        />
        <img
          className="w-100% h-48  lg:h-52 md:h-36  object-fill"
          src={fashion}
          alt=""
        />
        <img
          className="w-100% h-48  lg:h-52 md:h-36 object-fill"
          src={female}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavbarCarousel;
