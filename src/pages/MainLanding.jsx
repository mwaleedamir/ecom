import React from "react";
import Navbar from "../components/Navbar";
import NavLinks from "../components/NavLinks";
import NavbarCarousel from "../components/NavCarousel";
import NavImages from "../components/NavImages";
import FrontPageCards from "../components/FrontPageCards";
const MainLanding = () => {
  return (
    <div>
      <Navbar />
      <NavLinks />
      <NavbarCarousel />
      <NavImages />
      <FrontPageCards />
    </div>
  );
};

export default MainLanding;
