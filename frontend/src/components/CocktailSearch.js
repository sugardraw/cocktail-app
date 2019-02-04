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

  componentDidMount() {
    axios.get("http://localhost:3001/api/ingredients/all").then(data => {
      console.log(data);
      this.setState({
        ingredients: data.data
      });
    });
  }

  clickHandler = e => {

    console.log(e.target.value);
    axios
      .get(
        `http://localhost:3001/api/cocktails/get-matches/?name=${
          e.target.value
        }`
      )
      .then(data => {
        console.log(data.data);
        // const reducedArray = this.state.matches.reduce(
        //   (x, y) => (x.includes(y) ? x : [...x, y]),
        //   []
        // );
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
        <div className="">
          <input
            type="text"
            class="form-control"
            placeholder="Write some ingredient..."
            aria-label="ingredient"
            aria-describedby="search-by-ingredient"
            onKeyPress={this.clickHandler}
          />
        </div>
        <div>
          <CocktailList matches={this.state.matches} />
        </div>
      </div>
    );
  }
}

export default CocktailSearch;
