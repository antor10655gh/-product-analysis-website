import React from "react";
import "./About.css";
import me from "../images/me.jpg";

const About = () => {
  return (
    <div className="container">
      <div class="about-wrapper">
        <div class="about-left">
          <div class="about-left-content">
            <div>
              <div class="shadow">
                <div class="about-img">
                  <img src={me} alt="" />
                </div>
              </div>

              <h2>AM ANTOR</h2>
              <h3>Full Stack Web Developer</h3>
            </div>

            <ul class="icons">
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>

        <div class="about-right">
          <h1>
            hi<span>!</span>
          </h1>
          <h2>Here's who I am & what I do</h2>
          <div class="about-btns">
            <button type="button" class="btn btn-pink">
              resume
            </button>
            <button type="button" class="btn btn-white">
              projects
            </button>
          </div>

          <div class="about-para">
            <p>
              It's Antor, Professional Web Developer. I love to write code, it's
              my passion. I am here to help you, I am here to design your web
              page.I can help you to describe yourself in the best way.
            </p>
            <p>
              No matter how difficult your web page is, I'll find an easy way
              and complete your work anyway. Stay connect with me……..😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
