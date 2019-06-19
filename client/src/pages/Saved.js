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
    for(let i = 0;i<bookArray.length;i++){
      if(bookArray[i]._id === bookId){
        console.log("DEBUG -- Delete Book Found");
        //Remove Item in array
        let newArray = bookArray;
        newArray.splice(i,1);

        //update state with new array
        this.setState({bookArray:newArray});
      }
    }
    //Delete from DB
    this.deleteBookFromDB(bookId);

    
  }


deleteBookFromDB = (bookId) =>{
  axios.post("/api/book/delete/",{
    id:bookId
  }).then((response)=>{
    console.log("Deleted");

  }).catch((error)=>{
    console.log(error);
  });
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