import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/login/index.jsx";
import MusicAdmin from "./pages/admin/attentionManager/index";
import FeedAdmin from "./pages/admin/feedManager/index";
import { keepLoginAction } from "./store/actions";
import "bootstrap/dist/css/bootstrap.css";
import "./Font.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLocalStorageChecked, setIsLocalStorageChecked] = useState(false);
  const dispatch = useDispatch();

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MusicAdmin" element={<MusicAdmin />} />
          <Route path="/FeedAdmin" element={<FeedAdmin />} />
        </Routes>
      </Router>
    );
  } else {
    return <h1>Loading ...</h1>;
  }
}

export default App;
