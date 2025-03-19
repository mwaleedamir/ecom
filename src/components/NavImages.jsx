import React from "react";
import com from "../assets/recom.avif";
import { v4 as uuidv4 } from "uuid";
import { Images } from "../utils/ImagesData";
const NavImages = () => {
  return (
    <div>
      <div className="flex flex-wrap bg-pink-100 px-3 justify-between py-3">
        {Images.map(img =>
          <img
            key={uuidv4()}
            className="max-h-32"
            src={img.image}
            alt="images"
          />
        )}
      </div>
      <img src={com} alt="com" />
    </div>
  );
};

export default NavImages;
