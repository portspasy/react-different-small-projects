import React from "react";
import unsplash from "./api/unsplash";

import SearchBar from "./components/search-bar/search-bar";
import ImageList from "./components/image-list/image-list";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    console.log("Parent:");
    console.log(term);
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: term,
      },
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="App ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
