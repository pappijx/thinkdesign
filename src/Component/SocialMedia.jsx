import React from "react";
import "./SocialMedia.css";
import LinkedIn from "../brand/LinkedIn.svg";
import Facebook from "../brand/facebook.svg";
import Dribbble from "../brand/dribbble.svg";
import Github from "../brand/github.svg";

function SocialMedia() {
  return (
    <div className="socialmedia">
      <ul className="socialmedia__holder">
        <li>
          <img className="interactionHover" src={LinkedIn} alt="LinkedIn" />
          <span className="tooltip">Follow me on LinkedIn</span>
        </li>
        <li>
          <img className="interactionHover" src={Github} alt="Github" />
          <span className="tooltip">Follow me on Github</span>
        </li>
        <li>
          <img className="interactionHover" src={Facebook} alt="Facebook" />
          <span className="tooltip">Follow me on Facebook</span>
        </li>
        <li>
          <img className="interactionHover" src={Dribbble} alt="Dribbble" />
          <span className="tooltip">Follow me on Dribbble</span>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
