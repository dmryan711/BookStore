import React from "react";
import Nav from "../component/NavBar";
import Jumbotron from "../component/Jumbotron";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SearchPage() {
  return (
      <div>
        <Nav/>
        <Jumbotron/>
        <h1>Search Page</h1>
      </div>
      
  

  );
}

export default SearchPage;