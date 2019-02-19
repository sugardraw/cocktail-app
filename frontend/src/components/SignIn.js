import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Modal from "react-awesome-modal";
import { FaCocktail } from "react-icons/fa";

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      isLogged: false,
      error: "",
      msg: "",
      visible: false
    };
  }
  handleInput = e => {
    this.setState({
      isRegistered: false,
      error: "",
      msg: ""
    });
    console.log(e.target.value);
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = e => {
    e.preventDefault();

    if (this.state.email !== undefined || this.state.password !== undefined) {
      axios
        .post("http://localhost:3001/api/users/signin", this.state)
        .then(res => {
          console.log(res);
          if (res.data.isRegistered === false) {
            this.setState({
              isRegistered: true,
              error: "You are not registered. You should sign up first"
            });
          }
          if (res.data.isLogged) {
            this.setState({
              visible: true
            });
          }
        });
    } else {
      this.setState({
        msg: "please, send us a valid email and a password"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron p-5">
            <form
              style={{ minWidth: "300px" }}
              onSubmit={this.submit}
              action="http://localhost:3001/api/users/signin"
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
                Log In
              </h2>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={this.handleInput}
                  required
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

              {this.state.isRegistered && (
                <div>
                  <div className="text-light mt-3">
                    <b>{this.state.error}</b>
                  </div>
                  <Link to="/sign-up">
                    <input
                      style={{
                        fontFamily: " monospace",

                        padding: "15px 0",
                        backgroundColor: "rgb(172, 143, 239)"
                      }}
                      className="btn btn-lg btn-block"
                      name="submit"
                      type="submit"
                      value="Sign Up"
                    />
                  </Link>
                </div>
              )}
              {this.state.msg !== "" && (
                <div>
                  <div className="text-light mt-3">
                    <b>{this.state.msg}</b>
                  </div>
                </div>
              )}

              <Modal
                visible={this.state.visible}
                effect="fadeInUp"
                width="400"
                height="200"
              >
                <div>
                  <div className="text-dark mt-3">
                    <h4 className="p-4">
                      Congratulations, Log in was successful.
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
              </Modal>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SingIn;
