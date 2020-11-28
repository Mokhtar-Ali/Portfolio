import React from "react";
import Proj1 from "./proj1";
import Proj2 from "./proj2";
import Proj3 from "./proj3";
import Proj4 from "./proj4";
import "../style/projects.css";
import Navbar2 from "./navbar2";

export default function projects() {
  return (
    <div className="projs">
      <Navbar2 />
      {/* <h2 className='projects-header' > Projects </h2> */}
      <div className="projects">
        <Proj2 />
        <Proj3 />
        <Proj1 />
        <Proj4 />
      </div>
      <div className="div-copyRightP">
        <p>&copy; 2020 MokhtarAli.dev</p>
        <div style={{ flex: "1" }}></div>
        <p>Created by: Mokhtar Ali</p>
      </div>
    </div>
  );
}
