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
                  <div className="bg-warning text-center rounded">
                  <h5 className="card-title">{item.title}</h5>
                  <img className="card-img-top rounded-bottom"
                       width="150px"
                       src={"http://localhost:3001/images/" + item.image.filename}
                       alt="Card image cap"/>
                </div>
                </div>
              ))}
            </div>
            <Link to={{
              pathname: "cocktail-card",
              search: `?name=${this.props.ingredient}` }}
                  className="btn btn-primary mb-2">
              <input className=" btn btn-primary btn-sm"
                     type="button"
                     value="show matches for ..."/>
            </Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MatchedPopUp;
