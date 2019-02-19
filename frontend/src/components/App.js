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
        {/* <Navigation /> */}
        <div className="container">
          <div className="jumbotron p-5">
            <div className="mx-auto text-center m-3 ">
              <FaCocktail size={70} style={{ color: "#fdebeb" }} />
            </div>
            <h2
              style={{
                fontSize: "3rem",
                color: " rgb(255, 237, 77)",
                width: "300px"
              }}
              className="text-center mx-auto p-4 rounded"
            >
              Cocktail App
            </h2>

            <div className="input-group input-group mb-3">
              <Link className="btn btn-lg btn-block" to="/cocktail-search">
                <input
                  style={{
                    padding: "15px 0",
                    backgroundColor: "#ffaddb",
                    fontFamily: " monospace"
                  }}
                  type="button"
                  className="btn btn-lg btn-block"
                  value="Search Cocktails"
                />
              </Link>
              <Link className="btn  btn-lg btn-block" to="/sign-in">
                <input
                  style={{
                    fontFamily: " monospace",

                    padding: "15px 0",
                    backgroundColor: "#ffaddb"
                  }}
                  className="btn btn-lg btn-block"
                  type="button"
                  value="Create Cocktail *"
                />
              </Link>
            </div>
            {/* <div className="input-group input-group-sm mb-3 ">
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
            </div> */}
          </div>
        </div>
        <small>
          <em>* Only registered users can create Cocktails</em>
        </small>
      </div>
    );
  }
}

export default App;
