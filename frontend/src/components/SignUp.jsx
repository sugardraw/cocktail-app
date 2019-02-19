import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Modal from "react-awesome-modal";
import { FaCocktail } from "react-icons/fa";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      success: false,
      visible: false
    };
  }
  handleInput = e => {
    this.setState({
      status: false,
      success: false
    });
    console.log(e.target.value);
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/signup", this.state)
      .then(res => {
        console.log(res);

        if (res.data.isRegistered) {
          this.setState({
            status: true
          });
        }
        if (res.data.success) {
          this.setState({
            success: true,
            visible: true
          });
        }
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <Navigation />

        <div className="container">
          <div className="jumbotron p-5">
            <form
              style={{ minWidth: "300px" }}
              onSubmit={this.submit}
              action="http://localhost:3001/api/users/signup"
              method="post"
            >
            <Link to="/">
                <div className="mx-auto text-center m-3 ">
                  <FaCocktail size={70} style={{ color: "#fdebeb" }} />
                </div>
              </Link>
              <h2
                style={{
                  fontSize: "3rem",
                  color: " rgb(255, 237, 77)",
                  width: "300px"
                }}
                className="text-center mx-auto p-4 rounded"
              >
                Sign Up
              </h2>
              <div className="form-group">
                <label htmlFor="userInput">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="userInput"
                  aria-describedby="userInput"
                  placeholder="Enter name"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleInput}
                />
              </div>
              {this.state.status && (
                <div>
                  <div className="text-light">
                    <strong>
                      A user with this email is already registered. Sign in to
                      create your cocktail
                    </strong>
                  </div>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={this.handleInput}
                />
              </div>
              <input
                style={{
                  fontFamily: " monospace",

                  padding: "15px 0",
                  backgroundColor: "rgb(239, 136, 138)"
                }}
                className="btn btn-lg btn-block"
                name="submit"
                type="submit"
                value="Submit"
                onClick={this.submit}
              />

              {this.state.status && (
                <Link to="/sign-in">
                  <input
                    style={{
                      fontFamily: " monospace",

                      padding: "15px 0",
                      backgroundColor: "rgb(239, 136, 138)"
                    }}
                    className="btn btn-lg btn-block mt-3"
                    name="submit"
                    type="button"
                    value="Sign In"
                  />
                </Link>
              )}

              <Modal
                visible={this.state.visible}
                effect="fadeInUp"
                width="400"
                height="200"
              >
                {this.state.success && (
                  <div>
                    <div className="text-dark mt-3">
                      <h4 className="p-4">
                        Congratulations, your Registration was successful.
                      </h4>
                      <Link to="/post-cocktail">
                        <input
                          style={{
                            color: "white",
                            backgroundColor: "#17a2b8"
                          }}
                          type="button"
                          className="btn text-center position-relative d-block mx-auto "
                          value="create cocktail"
                        />
                      </Link>
                    </div>
                  </div>
                )}
              </Modal>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
