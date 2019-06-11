import React from "react";
import Nav from "../component/NavBar";
import Jumbotron from "../component/Jumbotron";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SavedPage() {
  return (
      <div>
        <Nav/>
        <Jumbotron/>
        <h1>Saved Page</h1>

      </div>
      
  

  );
}

export default SavedPage;