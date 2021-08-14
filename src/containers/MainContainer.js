import React, { useState } from "react";
import HeaderContainer from "./HeaderContainer";
import Navbar from "../components/main/Navbar";
import SlideImg from "../components/main/SlideImg";
import AlertWarning from "../components/main/AlertWarning";
import Stars from "../components/Stars";

import "./MainContainer.css";

const MainContainer = () => {
  const [selected, setSelected] = useState(3);

  console.log("in Main page");
  return (
    <div className="main">
      {/* <Stars stars={4.5}></Stars> 디테일한 소수점까지는 반영되지 않는다.*/}
      <header className="main-header">
        <HeaderContainer />
      </header>
      <div className="main-section">
        {selected >= 3 ? <AlertWarning /> : null}
        <section className="main-navbar">
          <Navbar />
        </section>
        {/* <CheckboxLabel /> */}
        <div className="main-slide-container">
          <section className="main-slideimg">
            <SlideImg autoflow={2000} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
