import React, { Component } from "react";
import axios from "axios";
import IngredientInput from "./IngredientInput";

import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Modal from "react-awesome-modal";

import { FaCocktail } from "react-icons/fa";

class PostACocktail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      inputs: [],
      msg: "",
      visible: false,
      token: this.props.cookies.get("token"),
      render: false
    };
  }

  componentDidMount() {
    axios
      .post("http://localhost:3001/api/users/check-token", {
        token: this.state.token
      })
      .then(res => {
        console.log(res.data);
        if (res.data.length > 0) {
          this.setState({ render: true });
        } else {
          return null;
        }
      });

    axios.get("http://localhost:3001/api/ingredients/all").then(data => {
      console.log(data.data);
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
    let { name, value } = e.target;
    let image = null;
    if (name === "image") {
      image = e.target.files[0];
      this.setState({ [name]: value, image: image });
    } else {
      console.log("no images selected");
      this.setState({ [name]: value });
    }
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
    e.preventDefault();

    const data = new FormData();

    //we put all keys our state object into a form Data

    for (let i in this.state) {
      console.log(this.state[i]);
      data.append(`${i}`, this.state[i]);
    }

    axios({
      method: "post",
      url: "http://localhost:3001/api/cocktails/save",
      data
    }).then(response => {
      if (response.status === 200) {
        this.setState({
          msg: "cocktail successfully saved",
          visible: true
        });
      }
    });

    e.target.reset();
  };

  render() {
    const inputs = this.state.inputs.map((Element, index) => {
      return (
        <Element handleChange={this.handleChange} key={index} index={index} />
      );
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

    if (this.state.render) {
      return (
        <div>
          <div className="jumbotron jumbo-post">
            <div className="cocktail-post">
              <Link to="/">
                <div className="mx-auto text-center m-3 ">
                  <FaCocktail size={70} style={{ color: "#fdebeb" }} />
                </div>
              </Link>
              <h2 className="py-3">Post your own Cocktail Recipe</h2>
              <form
                method="POST"
                action="/api/cocktails/save"
                encType="multipart/form-data"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="title">Cocktail Name</label>
                  <input
                    required
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
                      style={{
                        fontFamily: " monospace",
                        backgroundColor: "#dac66d",
                        marginTop: "6px"
                      }}
                      className="btn btn-lg btn-block"
                      type="button"
                      value="Add Ingredient"
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
                    required
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
                  <label
                    className="custom-control-label mb-2"
                    htmlFor="alcoholic_drink"
                  >
                    Is it an Alcoholic Cocktail?
                  </label>
                </div>
                <div className="form-group">
                  <label className="image mt-3" htmlFor="image">
                    Cocktail Image
                  </label>
                  <input
                    onChange={this.handleChange}
                    name="image"
                    type="file"
                    required
                    id="image"
                    className="image-input"
                  />
                </div>

                <legend className="text-right">
                  <small>* : parts per liter / pieces of</small>
                </legend>

                <Modal
                  visible={this.state.visible}
                  effect="fadeInUp"
                  width="400"
                  height="200"
                >
                  <div>
                    <div className="text-dark mt-3">
                      {this.state.msg !== "" ? (
                        <div>
                          <h4 className="p-4">{this.state.msg}</h4>
                          <ReactCSSTransitionGroup
                            transitionName="messages-loop"
                            transitionAppear={true}
                            transitionEnter={false}
                            transitionLeave={true}
                          >
                            <div
                              style={{
                                float: "right"
                              }}
                            >
                              <Link to="/cocktailsList/all">
                                <input
                                  style={{
                                    color: "white",
                                    backgroundColor: "#17a2b8"
                                  }}
                                  type="button"
                                  className="btn text-center position-relative d-block mx-auto "
                                  value="go to cocktails"
                                />
                              </Link>
                            </div>
                          </ReactCSSTransitionGroup>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Modal>

                <input
                  style={{
                    fontFamily: " monospace",
                    backgroundColor: "#dac66d",
                    marginTop: "4rem"
                  }}
                  className="btn btn-lg btn-block"
                  type="Submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="card">
            <h4 className="text-danger">
              You are not allow to create cocktails till you log in
            </h4>
            <div className="card-body">
              <Link className="btn  btn-lg btn-block" to="/sign-in">
                <input
                  style={{
                    fontFamily: " monospace",
                    padding: "15px 0",
                    backgroundColor: "#ffaddb"
                  }}
                  className="btn btn-lg btn-block"
                  type="button"
                  value="Sign In"
                />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PostACocktail;
