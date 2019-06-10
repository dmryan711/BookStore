const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type:String,
        required:[true,"A title is required"]
    },
    description:{
        type:String,
        required:[true, "A description is required"]
    },
    authors:[{
        type:String,
        required:[true, "Authors are required"]

    }],
    image:{
        type: String,
        data:Buffer,
        require:[true, "An image is required"]
    },
    link:{
        type:String,
        require:[true, "A link is required"]
    }
});

const Book = mongoose.model("Book",BooksSchema);

module.exports = Book;