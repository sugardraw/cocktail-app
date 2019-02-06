import React, { Component } from "react";
import axios from "axios";
import IngredientInput from "./IngredientInput";

class PostACocktail extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      inputs: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/ingredients/all").then(data => {
      console.log(data);
      this.setState({
        categories: data.data
      });
    });
  }

  addInput() {
    let inputs = this.state.inputs.concat(IngredientInput);
    this.setState({ inputs: inputs });
  }

  render() {
    const inputs = this.state.inputs.map((Element, index) => {
      return <Element key={index} index={index} />;
    });
    let ingredientsList = () => {
      let allIngredients = [];
      let mergedArrays = [];
      for (let i = 0; i < this.state.categories.length; i++) {
        console.log(this.state.categories[i].ingredients);
        allIngredients.push(this.state.categories[i].ingredients);
        mergedArrays = [].concat.apply([], allIngredients);
      }
      return mergedArrays;
    };

    return (
      <div className="postCocktail">
        <h2>Post your own Cocktail Recipe</h2>
        <form>
          <div className="form-group">
            <label htmlFor="cocktailName">Cocktail Name</label>
            <input
              type="text"
              className="form-control"
              id="cocktailName"
              placeholder="E.g. Margarita"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Write a tagline for</label>
            <input
              type="text"
              className="form-control"
              id="tagline"
              placeholder="E.g. a fresh sunshine"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">
              Select an Ingredient
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              {ingredientsList().map(ingredient => (
                <option>{ingredient}</option>
              ))}
            </select>
            <div className="inputs">{inputs}</div>
            <input
              className=" btn btn-primary btn-sm"
              type="button"
              value="Add more ingredients"
              onClick={this.addInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Write your Recipe
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="E.g. first cut the fruits..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PostACocktail;
