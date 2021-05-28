// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import Recipe from "./MyComponents/Recipe";
import About from "./MyComponents/About";
import Footer from "./MyComponents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return (
    <div className="MyFoodApp">
      <Router>
        <Header />
        <Route exact path="/" render={() => {
          return (
            <>
              <Home />
            </>)
        }} >
        </Route>
        <Switch>
          <Route exact path="/Recipes" render={() => {
            return (
              <>
                <Recipe />
              </>)
          }} >
          </Route>
          <Route exact path="/About" render={() => {
            return (
              <>
                <About />
              </>)
          }} >
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
