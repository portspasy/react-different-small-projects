import React from "react";

const getSeason = (lat, month) => {
  debugger;
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const getMonth = new Date().getMonth();
  debugger;
  const season = getSeason(props.lat, getMonth);

  console.log(season);

  return (
    <div>
      <h1>SeasonDisplay</h1>
    </div>
  );
};

export default SeasonDisplay;
