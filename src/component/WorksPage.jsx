import React from "react";
import { works, projectWorks } from "../component/data";
import "./WorksPage.css";

const WorksPage = () => {
  return (
    <div className="works">
      <div className="title">Featured Works</div>
      <div className="copywriting-container">
        <div className="top-sub-title">Social Media Works</div>
        <div className="works-image-container">
          {works.map((work, index) => (
            <a
              className="link"
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid-item">
                <img src={work.image} alt={work.alt} />
                <div className="sub-title">{work.sub_title}</div>
                <div className="desc">{work.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="event-container">
        <div className="top-sub-title">Event Works</div>
        <div className="event-image-container">
          {projectWorks.map((project, index) => (
            <div>
              <div className="grid-item">
                <img src={project.image} alt={project.alt} />
                <div className="sub-title">{project.sub_title}</div>
                <div className="desc">{project.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
