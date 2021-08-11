import React from "react";
import HeaderContainer from "./HeaderContainer";
import Navbar from "../components/Navbar";
import SlideImg from "../components/footer/SlideImg";
import Stars from "../components/Stars";

const MainContainer = () => {
  console.log("in Main page");
  return (
    <div>
      {/* <Stars stars={4.5}></Stars> 디테일한 소수점까지는 반영되지 않는다.*/}
      <HeaderContainer />
      <Navbar />
      <SlideImg autoflow={2000} />
    </div>
  );
};

export default MainContainer;
