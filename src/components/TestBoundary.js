import React from "react";
import Profile from "./Profile";
import ErrorBoundary from "./ErrorBoundary";
import { Link } from "react-router-dom";

const TestBoundary = () => {
  return (
    <div className="error-page">
      {/* Implementing Test Boundary  */}
      <ErrorBoundary>
        <ErrorComponent />
        <Profile />
      </ErrorBoundary>
      <Link to="/">
        <button className="home-btn">Go to Homepage</button>
      </Link>
    </div>
  );
};

const ErrorComponent = () => {
  throw new Error();
};

export default TestBoundary;
