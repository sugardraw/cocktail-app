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
      this.setState({
        categories: data.data
      });
    });
  }

  addInput = () => {
    console.log(IngredientInput, this.state.inputs);
    let inputs = this.state.inputs.concat(IngredientInput);
    this.setState({ inputs: inputs });
  };

  render() {
    const inputs = this.state.inputs.map((Element, index) => {
      return <Element key={index} index={index} />;
    });

    let ingredientsList = () => {
      let allIngredients = [];
      let mergedArrays = [];
      for (let i = 0; i < this.state.categories.length; i++) {
        allIngredients.push(this.state.categories[i].ingredients);
        mergedArrays = [].concat.apply([], allIngredients);
      }
      return mergedArrays;
    };

    return (
      <div className="postCocktail">
        <h2 className="py-3">Post your own Cocktail Recipe</h2>
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
          <hr
            style={{
              border: "solid #fff 1px",
              backgroundColor: "#fff",
              height: "1px",
              margin: "35px 18px"
            }}
          />
          <div
            style={{ backgroundColor: "#326490 !important" }}
            class="form-row p-3 rounded mb-2"
          >
            <div class="col-4">
              <label htmlFor="ingredients">Select an Ingredient</label>
              <select className="form-control" id="ingredients">
                {ingredientsList().map(ingredient => (
                  <option>{ingredient}</option>
                ))}
              </select>
            </div>
            <div class="col-4">
              <label htmlFor="measures">Select a Measure*</label>
              <select class="form-control" id="measures">
                <option>0.25</option>
                <option>0.5</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div class="col-4">
              <label htmlFor="addFields" />
              <input
                className="form-control mt-2 bg-info text-dark"
                type="button"
                value="Add a new ingredient"
                id="addFields"
                onClick={this.addInput}
              />
            </div>
          </div>
          <div className="inputs">{inputs}</div>
          <hr
            style={{
              border: "solid #fff 1px",
              backgroundColor: "#fff",
              height: "1px",
              margin: "40px 18px"
            }}
          />

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
          <legend className="text-right">
            <small>*: parts per liter or pieces</small>
          </legend>
        </form>
      </div>
    );
  }
}

export default PostACocktail;
