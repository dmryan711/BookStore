const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
require('dotenv').config()


const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use the deployed database. Otherwise use the local GoogleBooks database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.get("/api/book/:id",(req,res)=>{
  console.log("[DEBUG] GET REQUEST");
  // console.log(req.params.id)
  res.sendStatus(200);


});
// Define API routes here
app.get("/api/books/google",(req,res)=>{
  console.log("[DEBUG] GET REQUEST");
  console.log(req.query.searchTerm);
  const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
  const QUERY = req.query.searchTerm;
  const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
  const API_STRING = "&key="+API_KEY;
  let bookArray =[];
  axios.get(BASE_URL+QUERY+API_STRING)
  .then(function (response) {
    console.log(response);
    response.data.items.map(
      x => {
        const book = {
          title: x.volumeInfo.title,
          authors: x.volumeInfo.authors,
          description: x.volumeInfo.description,
          image: x.volumeInfo.imageLinks.smallThumbnail, //there is also thumbnail
          link: x.volumeInfo.previewLink,
          id: x.id
        }
        bookArray.push(book);
      }
    );
    res.status(200).json({bookArray});
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json({error});
  })
  .then(function () {
    // always executed
  });  
  
  


});
app.post("/api/saveBook",(req,res) =>{

  db.Book.create({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    image:req.body.image,
    link:req.body.link,
    authors:req.body.authors
  }).then(function(book){
    console.log(book._id);
    res.sendStatus(200);
    console.log("[DEBUG]  WORKING");

  }).catch(function(err){
    console.log(err.message);
    console.log("[DEBUG] NOT WORKING");

    res.sendStatus(400);
  });

});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
