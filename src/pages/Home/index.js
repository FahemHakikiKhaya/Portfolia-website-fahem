import React from "react";
import Attention from "./attention";
import Header from "./header";
import Feed from "./feed";
import Border from "../../component/border/Border_one";
import NavBar from "../../component/navigation/NavBar";

function index() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container px-5">
        <Attention />
        <Border />
        <Feed />
      </div>
    </div>
  );
}

export default index;
