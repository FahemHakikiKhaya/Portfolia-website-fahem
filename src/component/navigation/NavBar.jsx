import React from "react";
import "./NavBarStyle.css";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions";

function NavBar() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  const onLogout = () => {
    dispatch(logoutAction());
  };

  if (role == "Admin") {
    return (
      <div className="Nav-Bar body-font px-5">
        <Link
          tag={Link}
          to="/"
          className=" text-decoration-none text-black py-3 px-4 border-inline"
        >
          Home
        </Link>
        <Link
          tag={Link}
          to="/MusicAdmin"
          className="text-decoration-none text-black py-3 px-4"
        >
          MusicManager
        </Link>
        <Link
          tag={Link}
          to="/FeedAdmin"
          className="text-decoration-none text-black py-3 px-4 border-inline"
        >
          FeedManager
        </Link>
        <Link
          tag={Link}
          to="/"
          onClick={onLogout}
          className="btn text-decoration-none text-black py-3 px-4 border-right"
        >
          Log Out
        </Link>

        <div className="Icon-list pt-lg-2 px-3 icon-size d-flex ">
          <a href="https:www.instagram.com/fahemkhaya/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa fa-twitter-square"></i>
          </a>
          <a href="">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa fa-pinterest"></i>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="Nav-Bar body-font px-5">
      <Link
        tag={Link}
        to="/"
        className=" text-decoration-none text-black py-3 px-4 border-inline"
      >
        myHomePage
      </Link>
      <a href="" className="text-decoration-none text-black py-3 px-4">
        myExperience
      </a>
      <a
        href=""
        className="text-decoration-none text-black py-3 px-4 border-inline"
      >
        mySelf
      </a>
      <Link
        tag={Link}
        to="/Login"
        className="text-decoration-none text-black py-3 px-4 border-right"
      >
        Hello Guest{" "}
      </Link>

      <div className="Icon-list pt-lg-2 px-3 icon-size d-flex ">
        <a href="https:www.instagram.com/fahemkhaya/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="">
          <i className="fa fa-pinterest"></i>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
