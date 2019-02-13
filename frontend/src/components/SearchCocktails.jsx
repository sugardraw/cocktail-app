import React, { Component } from "react";
import { connect } from "react-redux";
import { getCocktails } from "../redux/actions/actionCreator";

import MatchedPopUp from "./MatchedPopUp";
import Navigation from "./Navigation";
import axios from "axios";

class SearchCocktails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      matches: []
    };
  }

  changeHander = e => {
    axios
      .get(
        `http://localhost:3001/api/cocktails/get-matches/?name=${
          e.target.value
        }`
      )
      .then(data => {
        console.log(data.data);
        this.setState({
          matches: [...data.data]
        });
      })
      .then(() => {
        console.log("matches", this.state.matches);
      })
      .catch(error => console.log(error));

    
    const ingredient = e.currentTarget.value.trim();
    this.setState({
      ingredient: ingredient
    });
    this.props.getCocktails(ingredient);
    console.log(ingredient);
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div>
            <input
              type="text"
              className="form-control cocktail-input"
              placeholder="which ingredients do you have..."
              aria-label="ingredient"
              aria-describedby="search-by-ingredient"
              onChange={this.changeHander}
            />
            <MatchedPopUp
              ingredient={this.state.ingredient}
              matches={this.state.matches}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getCocktails }
)(SearchCocktails);
