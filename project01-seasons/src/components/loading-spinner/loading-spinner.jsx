import React from "react";
import "./loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="ui segment" style={{ height: "100vh" }}>
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
