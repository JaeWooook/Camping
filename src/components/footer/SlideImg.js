import React, { useState, useCallback, useLayoutEffect } from "react";
// import Carousel from "react-responsive-carousel";
import "./SlideImg.css";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
//img
import test_img1 from "../../store/img/test_img.jpg";
import test_img2 from "../../store/img/test_img2.jpg";
import test_img3 from "../../store/img/test_img3.jpg";

const imgSrcList = [
  {
    id: 1,
    img: test_img1,
    text1: "주변 경관이 뛰어난",
    text2: "자연과 함께 어우러지는 사이트 간격 넓은 달빛정원글램핑",
  },
  {
    id: 2,
    img: test_img2,
    text1: "사랑하는 반려견과 함께",
    text2: "반려견 등반이 가능한 여유있는 W글램핑",
  },
  {
    id: 3,
    img: test_img3,
    text1: "숲의 공기와 계곡의 하모니",
    text2: "숲과 계곡의 하모니가 어우러진 플로렌스 글렘핑&캠핑",
  },
];

const SlideImg = (props) => {
  const { autoflow } = props;
  const [currentLoopIndex, setCurrentLoopIndex] = useState(0);
  const [isFlowing, setIsFlowing] = useState(true);

  const size = imgSrcList.length;

  const getStaticIndex = useCallback(
    (loopIndex) => {
      let rest = loopIndex % size;
      if (rest < 0) {
        rest += size;
      }
      return rest;
    },
    [size]
  );
  const getNearestLoopIndex = useCallback(
    (staticIndex) => {
      const currentStaticIndex = getStaticIndex(currentLoopIndex);
      const diff = staticIndex - currentStaticIndex;
      return currentLoopIndex + diff;
    },
    [currentLoopIndex, getStaticIndex]
  );

  useLayoutEffect(() => {
    let intervalld;
    if (isFlowing) {
      intervalld = setInterval(() => {
        setCurrentLoopIndex(currentLoopIndex + 1);
      }, autoflow);
    }
    return () => clearTimeout(intervalld);
  }, [isFlowing, setCurrentLoopIndex, currentLoopIndex]);

  return (
    <div
      className="slideimg"
      onMouseOver={() => setIsFlowing(false)}
      onMouseOut={() => setIsFlowing(true)}
    >
      <div
        className="img-container"
        style={{
          transform: `translateX(${-100 * size - 100 * currentLoopIndex}vw)`,
        }}
      >
        <div
          className="img-inner"
          style={{ transform: `translateX(${100 * currentLoopIndex}vw)` }}
        >
          {Array(size * 2 + 1)
            .fill(1)
            .map((_, index) => {
              const loopIndexToshow = currentLoopIndex + index - size;
              return {
                staticIndex: getStaticIndex(loopIndexToshow),
                loopIndexToshow,
              };
            })
            .map(({ staticIndex, loopIndexToshow }, index) => (
              <div key={loopIndexToshow} className="img-divbox">
                <img src={imgSrcList[staticIndex].img} />
                <p>{imgSrcList[staticIndex].text1}</p>
                <p>{imgSrcList[staticIndex].text2}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="slide-btn">
        <button
          className="slide-left-right-btn"
          onClick={() => setCurrentLoopIndex(currentLoopIndex - 1)}
          aria-label="Go to Previous"
        >
          <KeyboardArrowLeftIcon fontSize="large" />
        </button>
        <button
          className="slide-left-right-btn"
          onClick={() => setCurrentLoopIndex(currentLoopIndex + 1)}
          aria-label="Go to Next"
        >
          <KeyboardArrowRightIcon fontSize="large" />
        </button>
        <div className="slide-down-btn">
          {imgSrcList.map((_, index) => (
            <button
              key={index}
              className="img-btn"
              onClick={() => setCurrentLoopIndex(getNearestLoopIndex(index))}
            >
              <FiberManualRecordIcon fontSize="small" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideImg;
