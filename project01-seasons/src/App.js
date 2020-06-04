import React from "react";

class App extends React.Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // to update our State!!!
        this.setState({
          lat: [position.coords.latitude],
          lng: [position.coords.longitude],
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !(this.state.lat || this.state.lng)) {
      return <p>Error: {this.state.errorMessage}</p>;
    }

    if (!this.state.errorMessage && (this.state.lat || this.state.lng)) {
      return (
        <div>
          <p>Latitude: {this.state.lat}</p>
          <p>Longitude: {this.state.lng}</p>
        </div>
      );
    }

    return <div>Loading!</div>;
  }
}

export default App;
