import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
  return (
    <div className="jumbotron">
        <div className="container h-100">
            <div className="justify-content-center align-items-center">
                    <h1 className="display-4">React Google Book Search</h1>
                    <p className="lead">Search for and Save Books of Interest</p>
            </div>
        </div>
  </div>


  

  );
}

export default Jumbotron;