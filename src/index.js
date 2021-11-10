import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpComingMoviePage from "./pages/upComingMoviesPage";

import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW


const App = () => {
  return (
    <BrowserRouter>
        <SiteHeader />      {/* New Header  */}
      <Switch>
      <Route exact path="/movies/upcoming" component={UpComingMoviePage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies/:id" component={MoviePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
