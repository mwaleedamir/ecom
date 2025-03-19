import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { v4 as uuidv4 } from "uuid";

const CarouselSlider = ({ slider, images, className }) => {
  return (
    
      <div className={className}>
        <Carousel
          autoPlay={slider.autoPlay}
          autoFocus={slider.autoFocus}
          infiniteLoop={slider.infiniteLoop}
          showThumbs={slider.showThumbs}
        >
          {images.map(img => <img key={uuidv4()} src={img.img} alt={img.alt} />)}
        </Carousel>
      </div>
  
  );
};

export default CarouselSlider;
