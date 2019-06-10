const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type:String,
        required:[true,"A title is required"]
    }
});

const Book = mongoose.model("Book",BooksSchema);

module.exports = Book;