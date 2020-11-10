import React from "react";
import "./AboutMe.css";
import SocialMedia from "./SocialMedia";
import Interactions from "./Interactions";

function AboutMe() {
  return (
    <div className="home">
      <SocialMedia />
      <Interactions />
      <div className="home__content">
        <h1 className="changeLanguage">
          {/* <span className="blue"></span> */}
          <span className="namaste">नमस्ते</span>
          <span className="hello">Hello</span>
        </h1>
        <h1>I am Ayush Papnai</h1>
        <p>
          This is my portfolio website that will guide you through my journey in
          the world of web development and UX/UI
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
