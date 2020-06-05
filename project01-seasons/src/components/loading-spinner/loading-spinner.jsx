import React from "react";
import "./loading-spinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className="loading-spinner">
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">{props.message}</div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  message: "Loading...",
};

export default LoadingSpinner;
