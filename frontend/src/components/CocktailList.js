import React, { Component } from "react";
import { Link } from "react-router-dom";

class CocktailList extends Component {

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


          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CocktailList;
