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
    axios
      .get("http://localhost:3001/api/ingredients/all", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(data => {
        this.setState({
          categories: data.data
        });
      });
  }

  addInput = () => {
    let inputs = this.state.inputs.concat(IngredientInput);
    this.setState({ inputs });
  };

  handleChange = e => {

    console.log(e.target)
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  /**
   * we need to set a boolean for our checkbox
   * since the checkboxes doesen 't have values
   */

  setCheck = e => {
    if (e.target.checked) {
      this.setState(state => {
        state.alcoholic_drink = true;
        return state;
      });
    } else {
      this.setState(state => {
        state.alcoholic_drink = !state.alcoholic_drink;
        return state;
      });
    }
  };

  handleSubmit = e => {
    axios({
      method: "post",
      url: "http://localhost:3001/api/cocktails/save",
      headers: {},
      data: {
        newCocktail: this.state
      }
    }).then(response => {
      console.log(response);
    });

    e.preventDefault();
    e.target.reset();
  };

  getValues =(e)=>{
    console.log(e.target, e.currentTarget, this)
  }



  render() {
    const inputs = this.state.inputs.map((Element, index) => {
      return <Element handleChange={this.handleChange} key={index} index={index} />;
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
      <div className="cocktail-post">
        <h2 className="py-3">Post your own Cocktail Recipe</h2>
        <form
          method="POST"
          action="/api/cocktails/save"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="title">Cocktail Name</label>
            <input
              onChange={this.handleChange}
              name="title"
              type="text"
              className="form-control"
              id="title"
              placeholder="E.g. Margarita"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Write a tagline for</label>
            <input
              onChange={this.handleChange}
              name="tagline"
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
            className="form-row p-3 rounded mb-2"
          >
            <div className="col-4">
              <label htmlFor="ingredients">Select an Ingredient</label>
              <select
                onChange={this.handleChange}
                name="ingredients"
                className="form-control"
                id="ingredients"
              >
                {ingredientsList().map((ingredient, i) => (
                  <option key={i}>{ingredient}</option>
                ))}
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="measure">Select a Measure*</label>
              <select
                onChange={this.handleChange}
                className="form-control"
                id="measure"
                name="measure"
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
            <div className="col-4">
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
            <label htmlFor="description">Write your Recipe</label>
            <textarea
              name="description"
              onChange={this.handleChange}
              className="form-control"
              id="description"
              rows="3"
              placeholder="E.g. first cut the fruits..."
            />
          </div>
          <div className="custom-control custom-checkbox mr-sm-2">
            <input
              onClick={this.setCheck}
              name="alcoholic_drink"
              type="checkbox"
              id="alcoholic_drink"
              className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="alcoholic_drink">
              Is it an Alcoholic Cocktail?
            </label>
          </div>
          <legend className="text-right">
            <small>* : parts per liter / pieces of</small>
          </legend>
          <input
            name="submit"
            type="submit"
            className="w-50 float-right form-control mt-4 bg-info text-dark"
            value="submit"
          />
        </form>
      </div>
    );
  }
}

export default PostACocktail;
