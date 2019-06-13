import React, {Component} from "react";
import Nav from "../component/NavBar";
import Jumbotron from "../component/Jumbotron";
import SearchBar from "../component/SearchBar";
import Book from "../component/Book";
const  axios = require("axios");

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class  SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          bookArray: []
        }
        
    }

    createCard = (bookObject)=>{
        return <Book
          key = {bookObject.id}
          title = {bookObject.title}
          authors = {bookObject.authors}
          image = {bookObject.image}
          link = {bookObject.link}
          description = {bookObject.description}
          buttonVerb = {"Save"}
          viewClickHandler = {bookObject.link}
          altButtonClickHandler = {this.testClick}


        />
    }

    createCards = bookObjectArray => {
      return bookObjectArray.map(this.createCard);

  }

    testClick = () =>{
      console.log("Hey");
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
          .then((response) => {
            console.log(response.data.bookArray);
          
            this.setState({
              bookArray: response.data.bookArray

            });
          })
          .catch((error) =>{
            console.log(error);
            
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
           {this.createCards(bookArray)}
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