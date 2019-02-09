import React, { Component } from "react";

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
            <input
              className=" btn btn-primary btn-sm"
              type="button"
              value="show matches details..."
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CocktailList;
