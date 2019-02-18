import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";

class DisplayCocktailCard extends Component {
  render() {
    console.log("Display", this.props);
    return (
      <div>
        <Navigation />

        <div classNme="container">
          {this.props.cocktails.map(cocktail => (
            <div key={cocktail._id} className="col-md-3 my-2">
              <div className="cocktails-all rounded">
                <div className="card p-4 text-center title-all">
                  <h4 style={{ color: "black" }}>{cocktail.title}</h4>
                  {console.log(cocktail.image)}
                  <div className="mt-2">
                    <img
                      width="250px"
                      src={
                        "http://localhost:3001/images/" +
                        cocktail.image.filename
                      }
                      alt="img"
                    />
                  </div>
                  <div className="card-body">{cocktail.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktailsReducer.cocktails
});

export default connect(
  mapStateToProps,
  null
)(DisplayCocktailCard);
