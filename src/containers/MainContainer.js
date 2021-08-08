import React from "react";
import HeaderContainer from "./HeaderContainer";
import Navbar from "../components/Navbar";
import SlideImg from "../components/footer/SlideImg";

const MainContainer = () => {
  console.log("in Main page");
  return (
    <div>
      <HeaderContainer />
      <Navbar />
      <SlideImg autoflow={2000} />
    </div>
  );
};

export default MainContainer;
