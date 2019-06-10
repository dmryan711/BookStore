const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

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

// Define API routes here
app.post("/api/book",(req,res) =>{
  const bookTitle = req.body.title;

  db.Book.create({
    title: bookTitle,
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
