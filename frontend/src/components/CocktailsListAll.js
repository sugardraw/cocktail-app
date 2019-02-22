import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class cocktailsListAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCocktails: null
    };

  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/cocktails/list`)
      .then(data => {
        console.log(data.data);
        this.setState({
          allCocktails: data.data
        });
      })

      .catch(error => console.log(error));
  }

  render() {
    const list = () => {
      if (this.state.allCocktails !== null) {
        return this.state.allCocktails.map((item) => (
          <div className="col-md-3 my-2">
            <div className="cocktails-all rounded">
              <div className="card p-4 text-center title-all">
                <h4 style={{ color: "black" }}>{item.title}</h4>
                {console.log(item.image)}
                <div className="mt-2">
                  <img
                    width="250px"
                    src={"http://localhost:3001/images/" + item.image.filename}
                    alt="img"
                  />
                </div>
                <div className="card-body">{item.description}</div>
              </div>
            </div>
          </div>
        ));
      }
    };

    return (
      <div>
 
        <div className="container-fluid">
          <div className="list">
            <div className="row mx-2">{list()}</div>
          <Link className="btn  btn-lg btn-block" to="/post-cocktail">
                <input
                  style={{
                    fontFamily: " monospace",
                    padding: "15px 0",
                    backgroundColor: "#ffaddb"
                  }}
                  className="btn btn-lg btn-block"
                  type="button"
                  value="Create another Cocktail?"
                />
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default cocktailsListAll;
