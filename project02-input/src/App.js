import React from "react";
import SearchBar from "./components/search-bar/search-bar";
import ImageList from "./components/image-list/image-list";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <ImageList />
    </div>
  );
};

export default App;
