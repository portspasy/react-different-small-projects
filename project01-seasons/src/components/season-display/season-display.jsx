import React from "react";
import "./season-display.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's chilly",
    iconName: "snowflake",
  },
};

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
  const {text, iconName} = seasonConfig[season]
  // const text =
  //   season === "summer" 
  //     ? seasonConfig.summer.text 
  //     : seasonConfig.winter.text;
  // const icon =
  //   season === "summer"
  //     ? seasonConfig.summer.iconName
  //     : seasonConfig.winter.iconName;

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon huge icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon huge icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
