import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";

class DisplayCocktailCard extends Component {
  render() {
    return (
      <div className="jumbotron p-5">
          <Link to="cocktail-search">
              <div className="mx-auto text-center m-3 ">
                  <FaCocktail size={70} style={{ color: "#fdebeb" }} />
              </div>
          </Link>
        <div className="container">
          {this.props.matches.map(cocktail => (
            <div key={cocktail._id}>
              <div className="cocktails-all rounded m-1 ">
                <div className="card p-4 text-center title-all"
                     style={{ backgroundColor: "#f8dc8b"}}>
              <h4 style={{ color: "black" }}>
                  {cocktail.title}
              </h4>
                  <div className="mt-2">
                    <img width="250px"
                         src={
                             "http://localhost:3001/images/" +
                             cocktail.image.filename }
                         alt="img" />
                  </div>
                  <div className="card-body">
                      {cocktail.description}
                  </div>
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
    matches: state.cocktailsReducer.matches,
});

export default connect(
  mapStateToProps,
  null
)(DisplayCocktailCard);
