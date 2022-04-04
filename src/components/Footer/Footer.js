import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../images/mobile-logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img width="160px" src={logo} alt="" />

          <p className="footer-links">
            <Link to="/home">Home</Link>

            <Link to="/reviews">Reviews</Link>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/blog">Blog</Link>

            <Link to="/about">About</Link>
          </p>

          <p className="footer-company-name">
            © CopyRight by AM Antor - All are reserved 2022
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Lalmatiya-Block(C)</span> Mohammadpur, Dhaka
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+880 1795937735</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">amantor@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Mobile fixer is a one of the most popular company in the Bangladesh.
            We are always think about the satisfaction of our customer.
          </p>

          <div className="footer-icons">
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
