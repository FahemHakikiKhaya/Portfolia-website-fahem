import React, { useState, useEffect } from "react";
import Attention from "./attention";
import Header from "./header";
import Feed from "./feed";
import Border from "../../component/border/Border_one";
import MuiNavBar from "../../component/navigation/muiNavBar";
import "./index.css";

function Index() {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
      console.log(scrollState);
    };
  }, [scrollState]);

  return (
    <div className="home">
      {/* <MuiNavBar scrollState={scrollState} /> */}
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

export default Index;
