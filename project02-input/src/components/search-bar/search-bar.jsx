import React from "react";
import "./search-bar.css";

class SearchBar extends React.Component {
  onInputChange() {
    console.log("is Typing");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search:</label>
            <input
              type="text"
              placeholder="Search..."
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
