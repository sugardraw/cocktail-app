import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Cocktail</h1>
        <div className="container">
          <div className="liqueur">
            <button>Vodka</button>
            <button>Apple Schnapps</button>
            <button>Lime Juice </button>
            <button>Gin</button>
            <button>White Rum</button>
            <button>Light Rum</button>
            <button>Gold Rum</button>
            <button>Dark Rum</button>
            <button>Captain Morgan Original Spiced Rum</button>
            <button>Pina Colada Mix</button>
            <button>Cachaca Rum</button>
            <button>Triple Sec</button>
            <button>Tequila</button>
            <button>Kentucky Bourbon</button>
            <button>Orange Liqueur</button>
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
