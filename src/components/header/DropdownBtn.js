import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DropdownBtn.css";

const cityInfos = [
  { id: 1, name: "서울" },
  { id: 2, name: "경기" },
  { id: 3, name: "인천" },
  { id: 4, name: "강원" },
  { id: 5, name: "충남" },
  { id: 6, name: "대전" },
  { id: 7, name: "충북" },
  { id: 8, name: "부산" },
  { id: 9, name: "울산" },
  { id: 10, name: "대구" },
  { id: 11, name: "경북" },
  { id: 12, name: "경남" },
  { id: 13, name: "전남" },
  { id: 14, name: "광주" },
  { id: 15, name: "전북" },
  { id: 16, name: "제주" },
];

const DropdownBtn = () => {
  const [isActive, setIsActive] = useState(false);
  //const onClick = () => setIsActive(!isActive);
  const [dropItem, setDropItem] = useState("전체");
  //이렇게하면 클릭시 변경이안된다. onclick을 관리 불가능
  //아래처럼해도 onclick변경안된다 어떻게한거지?
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  //추후에 select box로 테스트 해볼 것
  return (
    <span>
      <span className="dropdown">
        <button onClick={() => setIsActive(!isActive)}>{dropItem}</button>
      </span>
      {isActive ? (
        <ul className="dropdown">
          {cityInfos.map((cityInfo) => (
            <li key={cityInfo.id}>
              <Link
                className="selectbtn"
                to="/"
                onClick={() => {
                  setDropItem(cityInfo.name);
                  setIsActive(!isActive);
                }}
              >
                {cityInfo.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </span>
  );
};

export default DropdownBtn;
