import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSlider = ({ slider, images, className }) => {
  console.log("any", slider);
  return (
    
      <div className={className}>
        <Carousel
          autoPlay={slider.autoPlay}
          autoFocus={slider.autoFocus}
          infiniteLoop={slider.infiniteLoop}
          showThumbs={slider.showThumbs}
        >
          {images.map(img => <img src={img.img} alt={img.alt} />)}
        </Carousel>
      </div>
  
  );
};

export default CarouselSlider;
