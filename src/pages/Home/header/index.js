import React from "react";
import "./HeaderStyle.css";

function index() {
  return (
    <div className="outer-div">
      <div className="Header">
        <h4 className="body-font p-3">人生のフロントページ</h4>
        <h1 className="title-font title-1 letter-spacing p-5">
          The Front Page Of <p>My Life</p>{" "}
        </h1>
      </div>
    </div>
  );
}

export default index;
