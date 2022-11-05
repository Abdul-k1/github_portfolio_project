import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="profile-page">
      <h1 className="prof-text">Welcome to my Github Profile Page</h1>
      <div className="btn-container">
        <Link to="/profile">
          <button className="repo-btn">My Repos</button>
        </Link>
        <Link to="/profile/testboundary">
          <button className="boundary-btn">Error Boundary</button>
        </Link>
        <Link to="*">
          <button className="error-btn">404 Error Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
