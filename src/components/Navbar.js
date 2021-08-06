import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navbar-title">이런 키워드는 어떠세요?</p>
      <div className="navbar-total">
        <div>
          <div>#즐길거리</div>
          <label>
            <input type="checkbox" name="#즐길거리" value="#생태교육" />
            #생태교육
          </label>
          <label>
            <input type="checkbox" name="#즐길거리" value="#둘레길" />
            #둘레길
          </label>
          <label>
            <input type="checkbox" name="#즐길거리" value="#축제" />
            #축제
          </label>
          <label>
            <input type="checkbox" name="#즐길거리" value="#문화유적" />
            #문화유적
          </label>
          <div>#쾌적/편리</div>
          <label>
            <input type="checkbox" name="#쾌적/편리" value="#온수 잘 나오는" />
            #온수 잘 나오는
          </label>
          <label>
            <input type="checkbox" name="#쾌적/편리" value="#깨끗한" />
            #깨끗한
          </label>
          <label>
            <input type="checkbox" name="#쾌적/편리" value="#차 대기 편한" />
            #차 대기 편한
          </label>
          <label>
            <input
              type="checkbox"
              name="#쾌적/편리"
              value="#사이트 간격이 넓은"
            />
            #사이트 간격이 넓은
          </label>
          <div>#함께</div>
          <label>
            <input type="checkbox" name="#함께" value="#아이들 놀기 좋은" />
            #아이들 놀기 좋은
          </label>
          <label>
            <input type="checkbox" name="#함께" value="#가족" />
            #가족
          </label>
          <label>
            <input type="checkbox" name="#함께" value="#커플" />
            #커플
          </label>
          <label>
            <input type="checkbox" name="#함께" value="#반려견" />
            #반려견
          </label>
          <div>#자연/힐링</div>
          <label>
            <input type="checkbox" name="#자연/힐링" value="#계곡 옆" />
            #계곡 옆
          </label>
          <label>
            <input type="checkbox" name="#자연/힐링" value="#물맑은" />
            #물맑은
          </label>
          <label>
            <input type="checkbox" name="#자연/힐링" value="#별보기 좋은" />
            #별보기 좋은
          </label>
          <label>
            <input type="checkbox" name="#자연/힐링" value="#힐링" />
            #힐링
          </label>
          <div>#액티비티</div>
          <label>
            <input type="checkbox" name="#액티비티" value="#물놀이 하기 좋은" />
            #물놀이 하기 좋은
          </label>
          <label>
            <input type="checkbox" name="#액티비티" value="#자전거 타기 좋은" />
            #자전거 타기 좋은
          </label>
          <label>
            <input type="checkbox" name="#액티비티" value="#수영장 있는" />
            #수영장 있는
          </label>
          <label>
            <input type="checkbox" name="#액티비티" value="#익스트림" />
            #익스트림
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
