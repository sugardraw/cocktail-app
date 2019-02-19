import React, { Component } from "react";
import { connect } from "react-redux";
import { getCocktails } from "../redux/actions/actionCreator";

import MatchedPopUp from "./MatchedPopUp";

import axios from "axios";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";

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

        <div className="container">
          <div className="jumbotron p-5">
            <div>
              <Link to="/">
                <div className="mx-auto text-center m-3 ">
                  <FaCocktail size={70} style={{ color: "#fdebeb" }} />
                </div>
              </Link>
              <h2
                style={{
                  fontSize: "3rem",
                  color: " rgb(255, 237, 77)",
                  width: "370px"
                }}
                className="text-center mx-auto rounded"
              >
                Search for Cocktails
              </h2>
              <input
                type="text"
                className="form-control mx-auto mt-4 cocktail-input"
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
      </div>
    );
  }
}

export default connect(
  null,
  { getCocktails }
)(SearchCocktails);
