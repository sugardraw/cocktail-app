import React, { Component } from "react";
import { FaCocktail } from "react-icons/fa";
import { Link } from "react-router-dom";
import uuid from "uuid";

class App extends Component {
  componentDidMount() {
    //setting a cookie
    this.props.cookies.set("token", "cocktail-app-" + uuid(), {
      path: "/"
    });
  }

  render() {
    return (
      <div>
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
