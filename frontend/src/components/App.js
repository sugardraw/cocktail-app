import React, { Component } from "react";
<<<<<<< HEAD
import Navigation from "./Navigation";

import { FaCocktail } from "react-icons/fa";

=======
>>>>>>> 1b80803d30b212476989c11bd7b558d65a255fd2
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="jumbotron p-5">
            <div className="mx-auto text-center m-3 ">
              <FaCocktail size={50} style={{ color: "#ca2742" }} />
            </div>
            <h2   style={{
                  color: "#17a2b8",
                  border: "1px solid #ca2742",
                  width: '300px'
                }} className="text-center mx-auto p-4 rounded">Cocktail App</h2>

<<<<<<< HEAD
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
=======
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
>>>>>>> 1b80803d30b212476989c11bd7b558d65a255fd2
          </div>
        </div>
      </div>
    );
  }
}

export default App;
