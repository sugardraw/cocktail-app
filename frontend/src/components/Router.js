import React, { Component } from "react";

import App from "./App";
import ShowCocktails from './ShowCocktails';
import DisplayCocktailCard from "./DisplayCocktailCard";
import CocktailSearch from "./CocktailSearch";

import PostACocktail from "./PostACocktail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import cocktailsListAll from "./CocktailsListAll";
=======
import ShowAll from "./ShowAll";
>>>>>>> 1b80803d30b212476989c11bd7b558d65a255fd2

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/show-all" component={ShowAll} />
          <Route path="/show-cocktails" component={ShowCocktails} />
          <Route path="/cocktail-card" component={DisplayCocktailCard} />
          <Route path="/cocktail-search" component={CocktailSearch} />
          <Route path="/post-cocktail" component={PostACocktail} />
          <Route path="/cocktailsList/all" component={cocktailsListAll} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
