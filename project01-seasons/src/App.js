import React from "react";
import SeasonDisplay from "./components/season-display/season-display";
class App extends React.Component {
  state = {
    lat: null,
    lng: null,
    errorMessage: "",
  };

  //componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur.
  componentDidMount() {
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
      return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />;
    }

    return <div>Loading!</div>;
  }
}

export default App;
