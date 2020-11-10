import React from "react";
import "./Portfolio.css";
import ProjectData from "./LoadProject";
import { Data } from "../Component/projects";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>This is portfolio</h1>
      <p className="portfolioDescription">
        From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and
        Node.JS. Check out my latest web software development portfolio
        projects.
      </p>
      <div className="Projectscontainer">
        {Data.map((data, key) => {
          return (
            <div key={key}>
              <ProjectData
                key={key}
                projectName={data.projectName}
                description={data.description}
                tech1={data.techUsed.tech1}
                tech2={data.techUsed.tech2}
                tech3={data.techUsed.tech3}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
