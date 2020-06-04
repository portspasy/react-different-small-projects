import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const getMonth = new Date().getMonth();
  const season = getSeason(props.lat, getMonth);
  const text =
    season === "summer" ? "Let's hit the beach!" : "Burr, it's chilly";
  const icon = season === "summer" ? "sun" : "snowflake";

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
