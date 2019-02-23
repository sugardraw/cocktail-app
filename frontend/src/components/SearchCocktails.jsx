import React, { Component } from "react";
import { connect } from "react-redux";
import MatchedPopUp from "./MatchedPopUp";
import { Link } from "react-router-dom";
import { searchMatches } from "../redux/actions/actionCreator";
import { FaCocktail } from "react-icons/fa";

class SearchCocktails extends Component {

  changeHandler = e => {
    e.preventDefault();
    const ingredient = e.currentTarget.value.trim();
    this.props.searchMatches(ingredient);
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
                onChange={this.changeHandler}
              />
              <MatchedPopUp
                ingredient={this.props.ingredient}
                matches={this.props.matches}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  matches: state.cocktailsReducer.matches,
  ingredient: state.cocktailsReducer.ingredient
});

export default connect( mapStateToProps, { searchMatches })(SearchCocktails);
