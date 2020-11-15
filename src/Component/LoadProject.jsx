import React from "react";
import "./LoadProject.css";

function LoadProject({ projectName, src, description, tech1, tech2, tech3 }) {
  // useEffect(() => {
  //   document.addEventListener("mousemove", updateMouserPosition);
  //   return () => {
  //     document.removeEventListener("mousemove", updateMouserPosition);
  //   };
  // }, []);

  return (
    <div className="loadProject">
      <div className="loadProject__card">
        <img src={src} alt="" />
        <div className="card__header">
          <div className="card__title">{projectName}</div>
          <div className="card__nav">
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
        <div className="description">
          <div className="techUser">
            <li>{tech1}</li>
            <li>{tech2}</li>
            <li>{tech3}</li>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default LoadProject;
