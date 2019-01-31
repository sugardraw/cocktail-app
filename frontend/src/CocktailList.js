import React, { Component } from "react";
import "./App.css";

class CocktailList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props.matches, typeof this.props.matches);

    const matches = this.props.matches.map(match => (
      <div className="card">
        {Object.keys(match).map(item => (
          <div className="cocktail">
            <div className="title">{match[item].title}</div>
            <div className="ingredient">
              {match[item].ingredients.map(ingredient => (
                <li>{ingredient.name}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    ));

    return <div>{matches}</div>;
  }
}

export default CocktailList;
