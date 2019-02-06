import React, { Component } from "react";
import axios from "axios";
class IngredientInput extends Component {
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
  render() {
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
          <label htmlFor="measures">Select a Measure</label>
          <select class="form-control" id="measures">
            <option>0.25</option>
            <option>0.5</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

      </div>
    );
  }
}

export default IngredientInput;
