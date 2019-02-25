import React, { Component } from "react";

import App from "./App";

import DisplayCocktailCard from "./DisplayCocktailCard";
import SearchCocktails from "./SearchCocktails";

import PostACocktail from "./PostACocktail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import cocktailsListAll from "./CocktailsListAll";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ShowAll from "./ShowAll";

import { withCookies } from "react-cookie";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <App cookies={this.props.cookies} />}
          />
          <Route path="/sign-up" component={SignUp} />
          <Route
            path="/sign-in"
            render={() => <SignIn cookies={this.props.cookies} />}
          />
          <Route path="/show-all" component={ShowAll} />
          <Route path="/cocktail-card" component={DisplayCocktailCard} />
          <Route path="/cocktail-search" component={SearchCocktails} />
          <Route
            path="/post-cocktail"
            render={() => <PostACocktail cookies={this.props.cookies} />}
          />
          <Route path="/cocktailsList/all" component={cocktailsListAll} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withCookies(Router);
