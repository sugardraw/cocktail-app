import React, { Component } from "react";
import Navigation from "./Navigation";

import { FaCocktail } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import uuidV4 from "uuid/v4";

class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3001/", { withCredentials: true })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="jumbotron p-5">
            <div className="mx-auto text-center m-3 ">
              <FaCocktail size={50} style={{ color: "#ca2742" }} />
            </div>
            <h2
              style={{
                color: "#17a2b8",
                border: "1px solid #ca2742",
                width: "300px"
              }}
              className="text-center mx-auto p-4 rounded"
            >
              Cocktail App
            </h2>

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
              <Link to="/sign-in">
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
            <div className="input-group input-group-sm mb-3 ">
              <Link className="mx-auto" to="/show-all">
                <input
                  style={{
                    color: "white",
                    backgroundColor: "#17a2b8"
                  }}
                  type="button"
                  className="btn m-2"
                  value="Show all existing Cocktails"
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
