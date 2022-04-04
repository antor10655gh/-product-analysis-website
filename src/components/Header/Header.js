import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../images/mobile-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col header-banner">
          <img src={logo} alt="" />
        </div>
        <div className="col">
          <nav>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
