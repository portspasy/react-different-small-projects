import React from "react";

class App extends React.Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: [position.coords.latitude],
          lng: [position.coords.longitude],
        });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div className="App">
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lng}</p>
      </div>
    );
  }
}

export default App;
