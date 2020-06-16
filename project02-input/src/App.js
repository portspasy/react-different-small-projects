import React from "react";
import SearchBar from "./components/search-bar/search-bar";
import ImageList from "./components/image-list/image-list";

import "./App.css";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log("Parent:");
    console.log(term);
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}

export default App;
