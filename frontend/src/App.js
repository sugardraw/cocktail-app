import React, { Component } from "react";
import "./App.css";

class App extends Component {
  clickHandler = e => {
    console.log(e.target);
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
            <button>Cola</button>
            <button>Orange Juice</button>
            <button>Maraschino Cherries</button>
            <button>Pineapple Juice</button>
            <button>Frozen Limeade Concentrate</button>
            <button>Lime</button>
            <button>Club Soda</button>
            <button>Cranberry Juice</button>
          </div>
          <div className="additional">
            <button>Sugar</button>
            <button>Mint Leaves</button>
            <button>Orgeat Syrup</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
