import React, { Component } from "react";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2 className="text-center text-dark">Cocktail App</h2>

          <div className="input-group input-group-sm mb-3">
            <Link to="/cocktail-search">
              <input
                type="button"
                className="btn btn-primary m-2"
                value="Search for existing Cocktails"
              />
            </Link>
            <Link to="/cocktail-maker">
              <input
                type="button"
                className="btn btn-secondary m-2"
                value=" Create a custom Cocktail"
              />
            </Link>
            <Link to="/show-cocktails">
              <input
                  type="button"
                  className="btn btn-warning m-2"
                  value="Show Cocktails"
              />
            </Link>
            <Link to="/show-all">
              <input
                  type="button"
                  className="btn btn-warning m-2"
                  value="Show Cocktails"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
