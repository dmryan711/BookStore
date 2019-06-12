import React, {Component} from "react";
import Nav from "../component/NavBar";
import Jumbotron from "../component/Jumbotron";
import SearchBar from "../component/SearchBar";
const  axios = require("axios");

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class  SearchPage extends Component {
    constructor(props){
        super(props);
        //Define State here
    }

    callApi = async () => {
        const response = await fetch('/api/book');
        // const body = await response.json();
        // if (response.status !== 200) throw Error(body.message);
        // return body;
      };

    clickHandler = (event)=>{
        event.preventDefault();
        const data = new FormData(event.target);
        // console.log(data.get("searchBox"));
        console.log("Say Hi");
        axios.get('/api/books/google', {
            params:{
                searchTerm:data.get("searchBox")
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  

    }
  render(){
    return (
        <div>
          <Nav/>
          <Jumbotron/>
          <SearchBar
            clickHandler ={this.clickHandler}
          />
          <h1>Search Page</h1>
        </div>
    );
      
  } 
}


export default SearchPage;