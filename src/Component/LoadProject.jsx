import React, { useEffect } from "react";
import "./LoadProject.css";

function LoadProject({ projectName, description, tech1, tech2, tech3 }) {
  // useEffect(() => {
  //   document.addEventListener("mousemove", updateMouserPosition);
  //   return () => {
  //     document.removeEventListener("mousemove", updateMouserPosition);
  //   };
  // }, []);

  return (
    <div className="loadProject">
      <div className="loadProject__card">
        <div className="card__header">
          <div className="card__title">{projectName}</div>
          <div className="card__nav">
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default LoadProject;
