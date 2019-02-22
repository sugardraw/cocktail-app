import React, { Component } from "react";
import { Link } from "react-router-dom";

class MatchedPopUp extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.matches.length > 0 && (
          <div className="card mb-3">
            <div className="card-body">
              {this.props.matches.map(item => (
                <div key={item._id} className="text-dark m-2">
                  <img className="card-img-top" src={item.image} alt="Card image cap"/>
                  <p>{item.title}</p>
                  <div className="card-text">{item.title}</div>
                  <div className="card-text">{item.description}</div>
                </div>
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
              value="show matches for ..."
            />
   
            </Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MatchedPopUp;
