import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import UserInfo from "../components/header/UserInfo";
import SearchBar from "../components/header/SearchBar";
import DropdownBtn from "../components/header/DropdownBtn";
import "./HeaderContainer.css";

const HeaderContainer = () => {
  //useEffect 이용해서 userlogin 여부 판단

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="HeaderContainer">
      <span>
        <Link to="/" className="Header-logo">
          Algo Camping
        </Link>
        <DropdownBtn />
        <SearchBar />
        {loggedIn ? (
          <UserInfo />
        ) : (
          <Link className="Header-login-btn" to="/SignIn">
            <FaUserCircle></FaUserCircle>로그인
          </Link>
        )}
      </span>
      <div>
        <span>태그 혹은 캠핑장을 입력하세요. ex) 친절한, 알고캠핑장</span>
      </div>
    </div>
  );
};

export default HeaderContainer;
