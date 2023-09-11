import React from "react";
import "./works.css";
import pdf2ics from "./pdf2ics.png";
import wip from "./WIP.png";
import wip_flutter from "./WIP_flutter.png";

const Works = () => {
  return (
    <section class="projects" id="projects">
      <h2 class="projects-title">
        Here are some of the little works and projects
      </h2>
      <div class="projects-container">
        <div class="project-container project-card">
          <img src={pdf2ics} alt="" className="project-pic" />
          <a
            className="project-link"
            href="https://github.com/jamesscjy/pdf2ica"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="project-title">PDF to ICS</h3>
          </a>
          <p class="project-details">
            Wrote a script extract and clean data from flight schedule PDF into
            iCalendar format
          </p>
        </div>
        <div class="project-container project-card">
          <img src={wip_flutter} alt="" className="project-pic" />
          <a
            className="project-link"
            href="https://github.com/jamesscjy"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="project-title">Flutter WIP</h3>
          </a>
          <p class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore
          </p>
        </div>
        <div class="project-container project-card">
          <img src={wip} alt="" className="project-pic" />
          <a
            className="project-link"
            href="https://github.com/jamesscjy"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="project-title">WIP</h3>
          </a>
          <p class="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
