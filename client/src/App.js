import React, { Component } from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import SavedPage from  "./pages/Saved";
import SearchPage from  "./pages/Search";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/saved" component={SavedPage} />
        <Route exact path="/search" component={SearchPage} />
        <Redirect from='/' to='/saved'/>
        <Route component ={ErrorPage} />
      </Switch>
     
    );
  }
}

export default App;
