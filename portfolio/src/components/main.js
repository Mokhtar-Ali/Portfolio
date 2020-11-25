import React from "react";
import "../style/main.css";
import "../style/about.css";
import Me from "../style/me.JPG";
import {
  DiCode,
  DiCss3,
  DiFirebase,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiJsBadge,
  DiPython,
  DiReact,
  DiRuby,
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import MyResume from "./MokhtarResume.pdf";

export default function Main() {
  return (
    <div className="main">
      <div className="about">
        <div className="">
          <img src={Me} className="profile_image" style={{ opacity: "90%" }} />
        </div>
        {/* <h1 className="developer">Web Developer</h1> */}
        <p className="name">
          I am Mokhtar Ali, a Full-Stack Software Engineer In NYC.
        </p>
        <p className="my-info-main">
          A global citizen, multilingual in coding and linguistics. With an
          extensive inquisitive nature to solve problems by building a more
          holistic customer-centric approach. As an Egyptian American, an eye
          for design comes naturally in addition to having a certificate in
          Graphic Design from Microsoft. Graduated from the rigorous intensive
          Flatiron Bootcamp in Software Engineering. I've learned Ruby, Rails,
          Javascript, and React in 15-weeks. Collaborated with individuals who
          have various educational and software backgrounds to build a
          high-quality application and project.
        </p>
        <a
          href="https://www.linkedin.com/in/mokhtar-ali-494b3765/"
          target="_blank"
          className="link" style={{fontSize:'1.3em'}}
        >
          {" "}
          Linkedin{" "}
        </a>
        <a
          href="https://github.com/Joemokhtarali"
          target="_blank"
          className="link" style={{fontSize:'1.3em'}}
        >
          {" "}
          Github
        </a>
        <div className="skills">
          <p className="skilled">
            {" "}
            Skills:
            <DiRuby style={{ marginLeft: "10px" }} className="icon" />
            <DiPython className="icon" id="python" />
            {/* <DiJsBadge /> */}
            <DiJavascript1 className="icon" id="2" />
            <DiReact className="icon" id="3" />
            <DiFirebase className="icon" id="4" />
            <DiHtml5 className="icon" id="5" />
            <DiCss3 className="icon" id="6" />
            <BsFillBootstrapFill className="icon" id="7" />
            <DiGithubBadge className="icon" id="8" />
          </p>
        </div>
        <h3 className="" style={{ marginTop: "70px" }}>
          Education
        </h3>
        <ul className="">
          <p> Flatiron School | Full Stack Software Engineering May-2020 </p>
          <p> Modern Academy Business School | Bachelor in Management 2010 GPA:3.4
          </p>
        </ul>
        <a className="navbar-li" href={MyResume} target="_blank">
          <h4 className="resume">Download Resume</h4>
        </a>
      </div>
    </div>
  );
}
