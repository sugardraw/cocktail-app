import React, { Component } from "react";

class CocktailList extends Component {
  render() {
    const matches = this.props.matches.map(match => (
      <div>
        {Object.keys(match).map(item => (
          <div className="text-info">{match.title}</div>
        ))}
      </div>
    ));

    return <div className="cocktails">{matches}</div>;
  }
}

export default CocktailList;
