import React from "react";
import Attention from "./attention";
import Header from "./header";
import Feed from "./feed";
import Border from "../../component/border/Border_one";
import NavBar from "../../component/navigation/NavBar";

function index() {
  return (
    <div className="container px-5">
      <Header />
      <Attention />
      <Border />
      <Feed />
    </div>
  );
}

export default index;
