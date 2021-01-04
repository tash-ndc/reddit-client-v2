import React from "react";
import { SiReddit } from "react-icons/si";
import "../Nav/Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <SiReddit className="logo-icon" />
        <h1>
          Sni<span>pp</span>et
        </h1>
      </div>
      <p>Reddit, minimised</p>
    </div>
  );
};

export default Nav;
