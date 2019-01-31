import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CocktailList from "./CocktailList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      isActive: false
    };
  }
  clickHandler = e => {
    e.target.classList.toggle("active");
    axios
      .get(
        `http://localhost:3001/api/cocktails/get-matches/?name=${
          e.target.textContent
        }`
      )
      .then(data => {
        console.log(data.data);
        const reducedArray = this.state.matches.reduce(
          (x, y) => (x.includes(y) ? x : [...x, y]),
          []
        );

        this.setState({
          matches: [data.data, ...reducedArray]
        });
      })
      .then(console.log("matches", this.state.matches))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h1>Cocktail</h1>
        <div className="container">
          <div className="liqueur">
            <button onClick={this.clickHandler}>Vodka</button>
            <button onClick={this.clickHandler}>Apple Schnapps</button>
            <button onClick={this.clickHandler}>Lime Juice </button>
            <button onClick={this.clickHandler}>Gin</button>
            <button onClick={this.clickHandler}>White Rum</button>
            <button onClick={this.clickHandler}>Light Rum</button>
            <button onClick={this.clickHandler}>Gold Rum</button>
            <button onClick={this.clickHandler}>Dark Rum</button>
            <button onClick={this.clickHandler}>
              Captain Morgan Original Spiced Rum
            </button>
            <button onClick={this.clickHandler}>Pina Colada Mix</button>
            <button onClick={this.clickHandler}>Cachaca Rum</button>
            <button onClick={this.clickHandler}>Triple Sec</button>
            <button onClick={this.clickHandler}>Tequila</button>
            <button onClick={this.clickHandler}>Kentucky Bourbon</button>
            <button onClick={this.clickHandler}>Orange Liqueur</button>
          </div>
          <div className="soft">
            <button onClick={this.clickHandler}>Cola</button>
            <button onClick={this.clickHandler}>Orange Juice</button>
            <button onClick={this.clickHandler}>Maraschino Cherries</button>
            <button onClick={this.clickHandler}>Pineapple Juice</button>
            <button onClick={this.clickHandler}>
              Frozen Limeade Concentrate
            </button>
            <button onClick={this.clickHandler}>Lime</button>
            <button onClick={this.clickHandler}>Club Soda</button>
            <button onClick={this.clickHandler}>Cranberry Juice</button>
          </div>
          <div className="additional">
            <button onClick={this.clickHandler}>Sugar</button>
            <button onClick={this.clickHandler}>Mint Leaves</button>
            <button onClick={this.clickHandler}>Orgeat Syrup</button>
          </div>
          <div className="cocktails">
            <CocktailList matches={this.state.matches} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
