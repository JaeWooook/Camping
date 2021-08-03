import React, { useState } from "react";
import UserInfo from "../components/UserInfo";
import SearchBar from "../components/SearchBar";
import DropdownBtn from "../components/DropdownBtn";

const HeaderContainer = () => {
  //useEffect 이용해서 userlogin 여부 판단

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <span>
        <DropdownBtn />
        <SearchBar />
        {loggedIn ? <UserInfo /> : <a href="/SignIn">로그인</a>}
      </span>
      <div>
        <span>태그 혹은 캠핑장을 입력하세요. ex) 친절한, 알고캠핑장</span>
      </div>
    </div>
  );
};

export default HeaderContainer;
