import React, { Component } from "react";
import Navigation from "./Navigation";

import { FaCocktail } from "react-icons/fa";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="jumbotron">
            <div className="mx-auto text-center m-3">
              <FaCocktail size={50} style={{ color: "#548aa0" }} />
            </div>
            <h2   style={{
                  color: "white",
                  border: "1px solid #75604c",
                  width: '300px'
                }} className="text-center mx-auto text-dark p-4 rounded">Cocktail App</h2>

            <div className="input-group input-group-sm mb-3">
              <Link to="/cocktail-search">
                <input
                  style={{
                  color: "white",
                  backgroundColor: "#17a2b8"
                }}
                  type="button"
                  className="btn m-2 "
                  value="Search Cocktails"
                />
              </Link>
              <Link to="/post-cocktail">
                <input
                  type="button"
                  style={{
                  color: "white",
                  backgroundColor: "#17a2b8"
                }}
                  className="btn m-2"
                  value=" Create Cocktail"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
