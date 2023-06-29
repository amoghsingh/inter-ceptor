import React from "react";
import CreatePostForm from "../create-post-form";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.scss";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" width="80px" height="60px" />
        </Link>
        {location.pathname.includes("/posts/") ? <CreatePostForm /> : null}
      </header>
    </>
  );
};

export default Header;
