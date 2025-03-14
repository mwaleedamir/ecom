import React from "react";
import n1 from "../assets/n1.gif";
import n2 from "../assets/n2.png";
import com from "../assets/recom.avif";

const NavImages = () => {
  const Images = [
    
      { image: n1 },
      { image: n2 },
      { image: n1 },
      { image: n1 },
      { image: n1 },
      { image: n1 },
      { image: n1 },
      { image: n1 },
      { image: n1 },
      { image: n1 },
      { image: n1 }

  ];

  return (
      <div>
    <div className="flex flex-wrap bg-pink-100 px-3 justify-between py-3">


      {Images.map(img =>
        <img className="max-h-32" src={img.image} alt="images" />
      )}
    </div>
      <img src={com} alt="com" />
      </div>
  );
};

export default NavImages;
