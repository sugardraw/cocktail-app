import React, { Component } from "react";
import { Link } from "react-router-dom";

class MatchedPopUp extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.matches.length > 0 && (
          <div className="p-1 m-1 card bg-light">
            <div className="card title">
              {this.props.matches.map(item => (
                <div className="text-dark m-2">{item.title}</div>
              ))}
            </div>
            <Link
              to={{
                pathname: "cocktail-card",
                search: `?name=${this.props.ingredient}`
              }}
              className="btn btn-primary mb-2"
            >
            <input
              className=" btn btn-primary btn-sm"
              type="button"
              value="show matches details..."
            />
   
            </Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MatchedPopUp;
