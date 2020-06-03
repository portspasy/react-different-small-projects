import React from "react";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return (
      <div className="App">
        <p>Latitude:</p>
        <p>Longitude:</p>
      </div>
    );
  }
}

export default App;
