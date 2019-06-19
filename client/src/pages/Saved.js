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

  deleteBook = (id) => {
    console.log("Delete");
    const {bookArray} = this.state;
    const bookId = id;
    console.log(id);
  }

  saveBook = (id) =>{
    const {bookArray} = this.state;
    const bookId = id;
   console.log(id);
    let book = {};
    for(let i = 0;i<bookArray.length;i++){
      if(bookArray[i].id === bookId){
        book =  bookArray[i];
        console.log("DEBUG -- Save Book");
        console.log(book);
      }
    }
    //Save book stuff here
    this.saveBookToDB(book);
  }

  createCard = (bookObject)=>{
    return <Book
      key = {bookObject._id}
      title = {bookObject.title}
      authors = {bookObject.authors}
      image = {bookObject.image}
      link = {bookObject.link}
      description = {bookObject.description}
      buttonVerb = {"Delete"}
      viewClickHandler = {bookObject.link}
      altButtonClickHandler = {this.deleteBook}
      id = {bookObject._id}
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