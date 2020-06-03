import React from "react";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
  return <div className="App">Hi There!</div>;
};

export default App;
