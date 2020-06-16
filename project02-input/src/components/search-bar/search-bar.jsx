import React from "react";
import "./search-bar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  // arrow function to avoid "this" error issue
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Child:");
    console.log(this.state.term);
    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search:</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
