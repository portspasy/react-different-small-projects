import React from "react";
import axios from "axios";

import SearchBar from "./components/search-bar/search-bar";
import ImageList from "./components/image-list/image-list";

import "./App.css";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log("Parent:");
    console.log(term);

    axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID YOUR_API_KEY",
      },
    });
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
