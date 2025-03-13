import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCustom = ({component}) => {
  return (
    <div>
      {component.map(img =>
        <img className="max-h-32" src={img.image} alt="images" />
      )}
    </div>
  )
}

export default CarouselCustom
