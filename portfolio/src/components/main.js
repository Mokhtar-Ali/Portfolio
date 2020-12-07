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

        <div>
          <img src={Me} className="profile_image"  style={{marginTop: '50px'}}/>
        </div>

        <h5 className="name">
          I am Mokhtar Ali, a Full-Stack Software Engineer In NYC.
        </h5>

        <h5 className="my-info-main">
          A global citizen, multilingual in coding and linguistics. With an
          extensive inquisitive nature to solve problems by building a more
          holistic customer-centric approach. As an Egyptian American, an eye
          for design comes naturally in addition to having a certificate in
          Graphic Design from Microsoft. Graduated from the rigorous intensive
          Flatiron Bootcamp in Software Engineering. I've learned Ruby, Rails,
          Javascript, and React in 15-weeks. Collaborated with individuals who
          have various educational and software backgrounds to build
          high-quality applications and projects.
        </h5>

        <a
          href="https://www.linkedin.com/in/mokhtar-ali-494b3765/"
          target="_blank"
          className="main-link"
        >
          {" "}
          Linkedin{" "}
        </a>

        <a
          href="https://github.com/Joemokhtarali"
          target="_blank"
          className="main-link" 
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
        </div> {/* end of skills div */}
        

        <h3 className="Education">
          Education
        </h3>
        <div className="degrees" >
          <p> Flatiron School | Full Stack Software Engineering May-2020 </p>
          <p> Modern Academy Business School | Bachelor in Management 2010 GPA:3.4</p>
        </div>

        <a className="resumeA" href={MyResume} target="_blank">
          <h4 className="resume">Download Resume</h4>
        </a>
      
      </div> {/* End of About Dev  */}
      </div> //  End of Main Dev 
      
  );
}
