import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div classNameName="container-fliud">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Start
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sing Up
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
