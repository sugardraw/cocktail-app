import React, { Component } from "react";

import App from "./App";
import CocktailSearch from "./CocktailSearch";
import ShowMatched from "./ShowMatched";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cocktail-search" component={CocktailSearch} />
          <Route path="/show-matched-cocktails" component={ShowMatched} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
