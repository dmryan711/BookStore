import React from "react";
import "./image.css"

const Book = (props) => {
  return (
    <div className="card" key ={props.id}>
      <img className="card-img-top bookImage mt-2 ml-3" src={props.image} alt="Book Cover"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">By {props.authors}</p>
        <p className="card-text">{props.description}</p>
        <a href={props.viewClickHandler} target="_blank"><button className = "btn btn-primary" id={props.id}>View</button></a><button className = "btn btn-success ml-2" onClick = {(e)=>props.altButtonClickHandler(props.id)} data-id = {props.id}>{props.buttonVerb}</button>
      </div>
    </div>

  );
}

export default Book;







