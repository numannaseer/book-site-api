const mongoose = require("mongoose");

//create books schema
const BookSchema = mongoose.Schema({
    ISBN: {type:String, unique:true},
    title: String,
    authors: [{
        type: mongoose.Types.ObjectId,
        ref: "authors",
      }],
    language: String,
    pubDate: String,
    numOfPages: Number,
    category: [String],
    publication: {
        type: mongoose.Types.ObjectId,
        ref: "publications",
      }
});

const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;