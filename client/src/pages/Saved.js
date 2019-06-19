import React, {Component} from "react";
import Nav from "../component/NavBar";
import Jumbotron from "../component/Jumbotron";
import Book from "../component/Book";
const axios =  require('axios');

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class  SavedPage extends Component {
  constructor(props){
      super(props);
      this.state = {
        bookArray: []
      }
      
  }

  componentDidMount() {
    axios.get("/api/books/savedToMongo").then((response)=>{
      console.log(response);
      this.setState({bookArray:response.data.books});
    }).catch((error)=>{
      console.log(error);
    });
    

  }


  createCard = (bookObject)=>{
    return <Book
      key = {bookObject.id}
      title = {bookObject.title}
      authors = {bookObject.authors}
      image = {bookObject.image}
      link = {bookObject.link}
      description = {bookObject.description}
      buttonVerb = {"Delete"}
      viewClickHandler = {bookObject.link}
      altButtonClickHandler = {this.saveBook}
      id = {bookObject.id}
    />
}

createCards = bookObjectArray => {
  return bookObjectArray.map(this.createCard);

}

  render(){
    const {bookArray} = this.state;
    return bookArray.length ?(
        <div>
          <Nav/>
          <Jumbotron/>
         
           {this.createCards(bookArray)}
          <h1>Books Found</h1>
        </div>
    ):(
      <div>
      <Nav/>
      <Jumbotron/>
     
      <h1>No Books Saved</h1>
    </div> 

    );
      
  } 


}


export default SavedPage;