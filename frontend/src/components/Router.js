import React, { Component } from "react";

import App from "./App";
import CocktailSearch from "./CocktailSearch";

import PostACocktail from "./PostACocktail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cocktail-search" component={CocktailSearch} />
          <Route path="/post-cocktail" component={PostACocktail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
