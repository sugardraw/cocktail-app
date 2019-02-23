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
    axios
        .get("http://localhost:3001/api/ingredients/all")
        .then(data => {
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
        className="form-row p-3 rounded mb-2"
      >
        <div className="col-4">

          <label htmlFor={"ingredients-" + this.props.index}>Select an Ingredient</label>
          <select
            
            onChange={this.props.handleChange}
            name={"ingredients-" + this.props.index}
            className="form-control"
            id={"ingredients-" + this.props.index}
          >
            {ingredientsList().map((ingredient, i) => (
              <option key={i}>{ingredient}</option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <label htmlFor={"measure-" + this.props.index}>Select a Measure*</label>
          <select
            onChange={this.props.handleChange}
            className="form-control"
            id={"measure-" + this.props.index}
            name={"measure-" + this.props.index}
          >
            <option>0.25</option>
            <option>0.5</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    );
  }
}

export default IngredientInput;
