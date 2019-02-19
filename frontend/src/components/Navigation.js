import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div
        className="fixed-top"
        style={{ backgroundColor: "rgb(255, 234, 236)" }}
      >
        <div className="menu m-2 mx-4">
          <Link to="/">
            <div
              style={{
                width: "125px",
                color: "white",
                backgroundColor: "#548aa0"
              }}
              className="d-inline-block p-2 m-2 text-center rounded"
            >
              Home
            </div>
          </Link>
          {/* <div className="log-field">
            <Link to="#">
              <div
                style={{
                  width: "125px",
                  color: "white",
                  backgroundColor: "#548aa0"
                }}
                className=" d-inline-block p-2 m-2 text-center rounded"
              >
                Log in
              </div>
            </Link>
            <Link to="#">
              <div
                style={{
                  width: "125px",
                  color: "white",
                  backgroundColor: "#548aa0"
                }}
   
                className="d-inline-block p-2 m-2 text-center rounded"
              >
                sign Up
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Navigation;
