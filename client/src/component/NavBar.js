import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Google Books</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">Search</a>
      <a class="nav-item nav-link" href="#">Saved</a>  
    </div>
  </div>
</nav>
  );
}

export default Navbar;
