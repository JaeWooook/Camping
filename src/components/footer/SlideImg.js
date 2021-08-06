import React from "react";
import "./SlideImg.css";

//img
import test_img1 from "../../store/img/test_img.jpg";
import test_img2 from "../../store/img/test_img2.jpg";
import test_img3 from "../../store/img/test_img3.jpg";

const SlideImg = () => {
  return (
    <div className="slideimg">
      <div>
        <div>
          <img src={test_img1} />
          <p>주변 경관이 뛰어난</p>
          <br></br>
          <p>자연과 함께 어우러지는 사이트 간격 넓은 달빛정원글램핑</p>
        </div>
        <div>
          <img src={test_img2} />
          <p>사랑하는 반려견과 함께</p>
          <br></br>
          <p>반려견 등반이 가능한 여유있는 W글램핑</p>
        </div>
        <div>
          <img src={test_img3} />
          <p>숲의 공기와 계곡의 하모니</p>
          <br></br>
          <p>숲과 계곡의 하모니가 어우러진 플로렌스 글렘핑&캠핑</p>
        </div>
      </div>
    </div>
  );
};

export default SlideImg;
