import React from "react";
import "./AlertWarning.css";

const AlertWarning = () => {
  return (
    <div className="alert-warning">
      <strong>🚨</strong>
      최대 3개의 태그까지 입력할 수 있습니다.
      <button className="btn-close"></button>
    </div>
  );
};

export default AlertWarning;
