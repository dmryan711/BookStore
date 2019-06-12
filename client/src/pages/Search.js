import React, {Component} from "react";
import Nav from "../component/NavBar";
import Jumbotron from "../component/Jumbotron";
import SearchBar from "../component/SearchBar";
const  axios = require("axios");

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class  SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          bookArray: []
        }
        
    }


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
    const {bookArray} = this.state;
    return bookArray.length ?(
        <div>
          <Nav/>
          <Jumbotron/>
          <SearchBar
            clickHandler ={this.clickHandler}
          />
          <h1>Books Found</h1>
        </div>
    ):(
      <div>
      <Nav/>
      <Jumbotron/>
      <SearchBar
        clickHandler ={this.clickHandler}
      />
      <h1>No Books Found</h1>
    </div> 

    );
      
  } 
}


export default SearchPage;