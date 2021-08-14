import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  // const [bChecked, setChecked] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };
  const checkHandler = (e) => {
    // setChecked(!bChecked);
    checkedItemHandler(e.target.value, e.target.checked);
    console.log(e.target.value, e.target.checked);
    console.log(checkedItems);
  };

  return (
    <div className="navbar">
      <p className="navbar-title">이런 키워드는 어떠세요?</p>
      <div className="navbar-total">
        <div className="col-total">
          <div className="col">
            <button className="btn">#즐길거리</button>
            <br />
            <input
              id="flexCheckDefault"
              type="checkbox"
              name="#즐길거리"
              value="#생태교육"
              onChange={(e) => checkHandler(e)}
            />
            <label for="flexCheckDefault">#생태교육</label>
            <br />
            <input
              id="CheckDefault-1"
              type="checkbox"
              name="#즐길거리"
              value="#둘레길"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-1">#둘레길</label>
            <br />
            <input
              id="CheckDefault-2"
              type="checkbox"
              name="#즐길거리"
              value="#축제"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-2">#축제</label>
            <br />
            <input
              id="CheckDefault-3"
              type="checkbox"
              name="#즐길거리"
              value="#문화유적"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-3">#문화유적</label>
          </div>
          <div className="col">
            <button className="btn">#쾌적/편리</button>
            <br />
            <input
              id="CheckDefault-4"
              type="checkbox"
              name="#쾌적/편리"
              value="#온수 잘 나오는"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-4">#온수 잘 나오는</label>
            <br />
            <input
              id="CheckDefault-5"
              type="checkbox"
              name="#쾌적/편리"
              value="#깨끗한"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-5">#깨끗한</label>
            <br />
            <input
              id="CheckDefault-6"
              type="checkbox"
              name="#쾌적/편리"
              value="#차 대기 편한"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-6">#차 대기 편한</label>
            <br />
            <input
              id="CheckDefault-7"
              type="checkbox"
              name="#쾌적/편리"
              value="#사이트 간격이 넓은"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-7">#사이트 간격이 넓은</label>
          </div>
          <div className="col">
            <button className="btn">#함께</button>
            <br />
            <input
              id="CheckDefault-8"
              type="checkbox"
              name="#함께"
              value="#아이들 놀기 좋은"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-8">#아이들 놀기 좋은</label>
            <br />
            <input
              id="CheckDefault-9"
              type="checkbox"
              name="#함께"
              value="#가족"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-9">#가족</label>
            <br />
            <input
              id="CheckDefault-10"
              type="checkbox"
              name="#함께"
              value="#커플"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-10">#커플</label>
            <br />
            <input
              id="CheckDefault-11"
              type="checkbox"
              name="#함께"
              value="#반려견"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-11">#반려견</label>
          </div>
          <div className="col">
            <button className="btn">#자연/힐링</button>
            <br />
            <input
              id="CheckDefault-12"
              type="checkbox"
              name="#자연/힐링"
              value="#계곡 옆"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-12">#계곡 옆</label>
            <br />
            <input
              id="CheckDefault-13"
              type="checkbox"
              name="#자연/힐링"
              value="#물맑은"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-13">#물맑은</label>
            <br />
            <input
              id="CheckDefault-14"
              type="checkbox"
              name="#자연/힐링"
              value="#별보기 좋은"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-14">#별보기 좋은</label>
            <br />
            <input
              id="CheckDefault-15"
              type="checkbox"
              name="#자연/힐링"
              value="#힐링"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-15">#힐링</label>
          </div>
          <div className="col">
            <button className="btn">#액티비티</button>
            <br />
            <input
              id="CheckDefault-16"
              type="checkbox"
              name="#액티비티"
              value="#물놀이 하기 좋은"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-16">#물놀이 하기 좋은</label>
            <br />
            <input
              id="CheckDefault-17"
              type="checkbox"
              name="#액티비티"
              value="#자전거 타기 좋은"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-17">#자전거 타기 좋은</label>
            <br />
            <input
              id="CheckDefault-18"
              type="checkbox"
              name="#액티비티"
              value="#수영장 있는"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-18">#수영장 있는</label>
            <br />
            <input
              id="CheckDefault-19"
              type="checkbox"
              name="#액티비티"
              value="#익스트림"
              onChange={(e) => checkHandler(e)}
            />
            <label for="CheckDefault-19">#익스트림</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
