import React, { Component } from "react";
import axios from "axios";
import CocktailList from "./CocktailList";

class CocktailSearch extends Component {
  constructor() {
    super();
    this.state = {
      matches: []
    };
  }

  //testing fetch all ingredients
  // componentDidMount() {
  //   axios.get("http://localhost:3001/api/ingredients/all").then(data => {
  //     console.log(data);
  //     this.setState({
  //       ingredients: data.data
  //     });
  //   });
  // }

  clickHandler = e => {
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
  };

  render() {
    return (
      <div className="container">
        <div>
          <input
            type="text"
            className="form-control cocktail-input"
            placeholder="which ingredients do you have..."
            aria-label="ingredient"
            aria-describedby="search-by-ingredient"
            onChange={this.clickHandler}
          />
          <CocktailList matches={this.state.matches} />
        </div>
      </div>
    );
  }
}

export default CocktailSearch;
