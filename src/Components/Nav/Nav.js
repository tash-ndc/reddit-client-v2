import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <h1>Nav</h1>
      <Link to="/subreddit">
        <h2>SR</h2>
      </Link>
      <Link to="/posts">
        <h2>POSTS</h2>
      </Link>
    </div>
  );
};

export default Nav;
