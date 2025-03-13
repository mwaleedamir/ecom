import React from "react";
import Navbar from "../components/Navbar";
import NavLinks from "../components/NavLinks";
import NavbarCarousel from "../components/NavCarousel";
import NavImages from "../components/NavImages";
import Cards1 from "../components/Cards1";
const MainLanding = () => {
  return (
    <div>
      <Navbar />
      <NavLinks />
      <NavbarCarousel />
      <NavImages />
      <Cards1 />
    </div>
  );
};

export default MainLanding;
