import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Jumbo from "./component/Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Jumbo />

      </div>
     
    );
  }
}

export default App;
