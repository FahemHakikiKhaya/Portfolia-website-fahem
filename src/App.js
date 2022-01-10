import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/login/index.jsx";
import MusicAdmin from "./pages/admin/attentionManager/index";
import FeedAdmin from "./pages/admin/feedManager/index";
import MuiLogin from "./pages/login/muiLogin";
import { keepLoginAction } from "./store/actions";
import "bootstrap/dist/css/bootstrap.css";
import "./Font.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuiNavbar from "./component/navigation/muiNavBar";

function App() {
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false);
  const [scrollState, setScrollState] = useState("top");
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir");
          var x = document.getElementsByClassName("transition");
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.padding = "0px";
          }
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
          var x = document.getElementsByClassName("transition");
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.padding = "24px";
          }
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
      console.log(scrollState);
    };
  }, [scrollState]);

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("userData");

    if (userLocalStorage) {
      const userData = JSON.parse(userLocalStorage);
      const { id, username, role } = userData;
      keepLoginAction({ id, username, role, dispatch });
    }

    setIsLocalStorageChecked(true);
  }, []);

  if (isLocalStorageChecked) {
    return (
      <Router>
        <MuiNavbar scrollState={scrollState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<Login />} />
          <Route path="/MusicAdmin" element={<MusicAdmin />} />
          <Route path="/FeedAdmin" element={<FeedAdmin />} />
          <Route path="/Login" element={<MuiLogin />} />
        </Routes>
      </Router>
    );
  } else {
    return <h1>Loading ...</h1>;
  }
}

export default App;
