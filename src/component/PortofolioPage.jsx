import React from "react";
import "./PortofolioPage.css";
import photo from "../img/photoProfile.jpg";
import experience from "./experience";

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <main className="portfolio-main">
        <h1 className="name">Ruth Gabriela</h1>
        <p className="portfolio-subtitle">Social Media Copywriter Portfolio</p>
      </main>
      <div className="introduction-container">
        <img src={photo} alt="Ruth Gabriela" />
        <div className="introduction">
          <p className="intro-text">
            Hello, I’m{" "}
            <span style={{ fontWeight: "bold", color: "#804d12" }}>
              Ruth Gabriela
            </span>
            , a Communication graduate with experience in{" "}
            <span style={{ fontWeight: "bold", color: "#804d12" }}>
              content creation, brand management, digital marketing, and social
              media management.
            </span>{" "}
            I’ve worked at a social media agency, where I learned how to create
            and manage strategies that help brands connect with their audiences.
          </p>
          <p className="intro-text">
            Through my work, I’ve realized how important social media is for
            brand marketing. It’s not just about promoting products but about
            <span style={{ fontWeight: "bold", color: "#804d12" }}>
              {" "}
              creating real connections between brands and people.
            </span>{" "}
            I’m passionate about understanding what consumers want and making
            sure that brands can meet those needs in a way that feels natural
            and genuine.
          </p>
          <p className="intro-text">
            I believe that{" "}
            <span style={{ fontWeight: "bold", color: "#804d12" }}>
              building strong relationships between brands and their audiences
              is key to success
            </span>
            . My goal is to keep finding new ways to bring consumers and brands
            closer together, creating experiences that are meaningful and
            valuable for both sides.
          </p>
        </div>
      </div>
      <div className="credibility">
        <div className="experience">
          <div className="title">Experience</div>
          {experience.map((exp, index) => (
            <div className="experience-container">
              <div className="exp-sub-title">
                <span style={{ fontWeight: "bold" }}>{exp.title}</span> |{" "}
                {exp.organization}
              </div>
              <div className="exp-desc">{exp.period}</div>
            </div>
          ))}
        </div>
        <div className="skills-n-tools">
          <div className="title">Skills and Tools</div>
          <div className="skill-container">
            <div className="exp-desc">- Copywriting</div>
            <div className="exp-desc">- Editing</div>
            <div className="exp-desc">- Content Planner</div>
            <div className="exp-desc">- Content Creator</div>
            <div className="exp-desc">- Digital Marketing</div>
            <div className="exp-desc">- AI Tools - Grammarly & ChatGPT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
