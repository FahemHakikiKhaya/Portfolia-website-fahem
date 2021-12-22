import React, { useState, useEffect } from "react";
import Attention from "./attention";
import Header from "./header";
import Feed from "./feed";
import Border from "../../component/border/Border_one";
import NavBar from "../../component/navigation/NavBar";

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
    <div>
      <div>
        <Header scrollState={scrollState} />
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
