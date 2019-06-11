import React from "react";
import Nav from "../component/NavBar";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ErrorPage() {
  return (
    <div>
        <Nav/>
        <h1>YOU FOUND THE SECRET PAGE!</h1>
        <p>Just kidding this is a single page React application, so if anything you just found a secret component....</p>
        <p>But,alas, you did not, this is an error,click on a link above to get back to where you were intended to go</p>
    </div>
    
  

  );
}

export default ErrorPage;