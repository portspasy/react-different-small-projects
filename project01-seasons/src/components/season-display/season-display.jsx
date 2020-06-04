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
  console.log(season);

  return (
    <h1>
      {season === "summer" ? "Let's hit the beach!" : "Burr, it's chilly"}
    </h1>
  );
};

export default SeasonDisplay;
