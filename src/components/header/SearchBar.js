import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const cityInfos = [
  { value: "전체", label: "전체" },
  { value: "서울", label: "서울" },
  { value: "경기", label: "경기" },
  { value: "인천", label: "인천" },
  { value: "강원", label: "강원" },
  { value: "충남", label: "충남" },
  { value: "대전", label: "대전" },
  { value: "충북", label: "충북" },
  { value: "부산", label: "부산" },
  { value: "울산", label: "울산" },
  { value: "대구", label: "대구" },
  { value: "경북", label: "경북" },
  { value: "경남", label: "경남" },
  { value: "전남", label: "전남" },
  { value: "광주", label: "광주" },
  { value: "전북", label: "전북" },
  { value: "제주", label: "제주" },
];

const SearchBar = () => {
  const [cityName, setCityName] = useState("전체");
  // const { selectSubmit, selectReg } = useForm();
  const [searchs, setSearhs] = useState("");

  const setSearchsHandler = (e) => {
    e.preventDefault();
    setSearhs(e.target.value);
  };

  const selectedCityName = (data) => {
    setCityName(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //리덕스에 저장?굳이 할필요가 있는지 고민
    //db에서 불러와서 뿌려주면된다.
    console.log("search contents", searchs);
    console.log("selected cityName", cityName);
    //리덕스 이용해서 검색컨테이너로 넘겨준다?
  };

  // useEffect(() => {
  //   console.log("search contents", searchs);
  //   console.log("selected cityName", cityName);
  // }, [searchs, cityName]);

  return (
    <span>
      <form onSubmit={handleSubmit}>
        <select
          name="cityname"
          onChange={(e) => selectedCityName(e.target.value)}
        >
          {cityInfos.map((cityInfo) => (
            <option key={cityInfo.value} value={cityInfo.value}>
              {cityInfo.label}
            </option>
          ))}
        </select>
        <input
          className="search-bar"
          type="text"
          value={searchs}
          onChange={setSearchsHandler}
        />
        <button>
          <FaSearch></FaSearch>
        </button>
      </form>
    </span>
  );
};

export default SearchBar;
