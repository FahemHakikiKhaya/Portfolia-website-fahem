import React from "react";
import MuiNavBar from "../../../component/navigation/muiNavBar";

export default function Manager() {
  return (
    <div className="d-flex justify-content-between">
      <div className="border border-1 border-dark w-25 d-flex justify-content-center">
        <h1>Manager</h1>
      </div>
      <div className="border border-1 border-dark w-75 d-flex justify-content-center ">
        <h1>Display Live Feed</h1>
      </div>
    </div>
  );
}
