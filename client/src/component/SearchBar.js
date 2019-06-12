import React from "react";

const SearchPage = (props) => {
  return (
<div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
      <form className="col-12" onSubmit = {props.clickHandler}>
        <div className="form-group">
          <input type="text" className="form-control" id="searchInput" placeholder="Search" name="searchBox"/>
          <button className="btn btn-primary mt-2">Search Google Books</button>
        </div>
      </form>   
    </div>
</div>
  );
}

export default SearchPage;