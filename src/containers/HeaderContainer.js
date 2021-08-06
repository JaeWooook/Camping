import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import UserInfo from "../components/header/UserInfo";
import SearchBar from "../components/header/SearchBar";
import "./HeaderContainer.css";

const HeaderContainer = () => {
  //useEffect 이용해서 userlogin 여부 판단

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="HeaderContainer">
      <div className="head-contents">
        <div>
          <Link to="/" className="Header-logo">
            Algo Camping
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          {loggedIn ? (
            <UserInfo />
          ) : (
            <Link className="Header-login-btn" to="/SignIn">
              <FaUserCircle></FaUserCircle>로그인
            </Link>
          )}
        </div>
      </div>
      <div className="head-phrases">
        <span>태그 혹은 캠핑장 명을 입력하세요. ex) 친절한, 알고캠핑장</span>
      </div>
    </div>
  );
};

export default HeaderContainer;
