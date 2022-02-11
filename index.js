// MAIN BACKEND FILE
require('dotenv').config()
const BookModel = require("./database/books");
const AuthorModel = require("./database/authors");
const PublicationModel = require("./database/publications");

const express = require("express");
const app = express();
app.use(express.json());

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"))
.catch((error)=>{console.log("Connection to Mongodb can't be established. Refer the error message for details.", error)});


//All the Routes to serve incoming requests from my website/book-site called bookdeets.com (front-end yet to be developed).
//Refer 'README' file in source code for more details.

/*
Route            /
Description      Home Page
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg:  https://booksite-api.herokuapp.com/
app.get("/", (req, res) => {
    return res.json({"Welcome Message": `Welcome to my Backend API for the 'bookdeets.com' Website. I highly recommend you to read the 'README' file before making any request. You can use example url above a GET, PUT, POST, DELETE route in 'index.js' to make a request. However, for POST and PUT requests you have to provide data in request body. You can use Postman to make requests to the API. Link to source code:  https://github.com/numannaseer/book-site-api `});
});


/*
Route            /books
Description      Get all the books from the books collection
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/books
app.get("/books", async (req, res) => {
    const getAllBooks = await BookModel.find();
    return res.json(getAllBooks);
});


/*
Route            /books/:id
Description      Get a book from the books collection using the given book _id
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/books/61edbac32ed756bc095333a0
app.get("/books/:id", async(req,res) =>{
    const {id}=req.params;
    const getBook = await BookModel.findById(id);
    if(getBook==null){
      return res.json({"error": `No Book found for the given book _id ${id}`});
    }
 return res.json(getBook);
});


/*
Route            /book-isbn
Description      Get specific book from books collection using given book ISBN
Access           PUBLIC
Parameter        isbn
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/book-isbn/3469ab
app.get("/book-isbn/:isbn", async (req, res) => {
    const {isbn} = req.params;
    const getSpecificBook = await BookModel.findOne({ISBN: isbn});
    if(getSpecificBook==null) {
        return res.json({"error": `No Book found for the ISBN of ${isbn}`});
    }
    return res.json(getSpecificBook);
});


/*
Route            /book-category
Description      Get specific book from books collection using given book category
Access           PUBLIC
Parameter        category
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/book-category/programming
app.get("/book-category/:category", async (req, res) => {
    const {category} = req.params;
    const getSpecificBooks = await BookModel.find({category:category});
    if(getSpecificBooks.length===0) {
        return res.json({"error": `No Books found for the category of ${category}`});
    }
    return res.json(getSpecificBooks);
});


/*
Route            /authors
Description      Get all authors from authors collection
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/authors
app.get("/authors", async (req, res) => {
    const getAllAuthors = await AuthorModel.find();
    return res.json(getAllAuthors);
});


/*
Route            /author-id/:id
Description      Get an author from authors collection using given author's _id
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/author-id/61edb95b2ed756bc0953339e
app.get("/author-id/:id", async (req, res) => {
  
    const {id} = req.params;
    const getSpecificAuthor = await AuthorModel.findOne({_id: id});
    console.log(getSpecificAuthor);
    if(getSpecificAuthor==null){
        return res.json({"error": `No Author found for the id of ${id}`});
    }
     return res.json(getSpecificAuthor);
});


/*
Route            /author-isbn/:isbn
Description      Get all authors from authors collection using given book ISBN
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/author-isbn/7rab21d
app.get("/author-isbn/:isbn", async (req, res) => {
   const {isbn} = req.params;
   const getSpecificAuthors = await AuthorModel.find({books:isbn});
   if(getSpecificAuthors.length===0) {
       return res.json({"error": `No Authors found for the book of ${isbn}`});
   }
   return res.json(getSpecificAuthors);
});


/*
Route            /publications
Description      Get all publications from publications collection
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/publications
app.get("/publications", async(req, res) => {
    const getAllPublications = await PublicationModel.find({});
    return res.json(getAllPublications);
});


/*
Route            /publications
Description      Get a publication from publications collection using given publication _id
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/publications/61eeaf3645930a7d8c9d6d67
app.get("/publications/:id", async(req, res) => {
   
    const {id}=req.params;
    const getPublication = await PublicationModel.findById(id);
    if(getPublication==null){
        return res.json({"error": `No publication found for the given publication _id ${id}`});
    }
    return res.json(getPublication);
});


/*
Route            /publication-isbn/:isbn
Description      Get the publication from publications collection which published a book of given ISBN
Access           PUBLIC
Parameter        NONE
Methods          GET
*/
//Eg: https://booksite-api.herokuapp.com/publication-isbn/12345Two
app.get("/publication-isbn/:isbn", async(req, res) => {
    const {isbn}=req.params;
const getPublication= await PublicationModel.find({books:isbn });
if(getPublication.length===0){
    return res.json({"error": `No Publication found for the book of ${isbn}`})
}else return res.json(getPublication);
});


/*
Route            /book
Description      Add a new book to the books collection using the data in request body
Access           PUBLIC
Parameter        NONE
Methods          POST
*/
//Eg: https://booksite-api.herokuapp.com/book
app.post("/book", async (req, res) => {
    const addNewBook = await BookModel.create(req.body);
    return res.json( {bookAdded: addNewBook, message: "Book was added !!!"} );
});


/*
Route            /author
Description      Add a new author to the authors collection using the data in request body
Access           PUBLIC
Parameter        NONE
Methods          POST
*/
//Eg: https://booksite-api.herokuapp.com/author
app.post("/author", async (req, res) => {
    const addNewAuthor = await AuthorModel.create(req.body);
    return res.json( {authorAdded: addNewAuthor, message: "Author was added !!!"} );
});


/*
Route            /publication
Description      Add a new publication to the publications collection using the data in request body
Access           PUBLIC
Parameter        NONE
Methods          POST
*/
//Eg: https://booksite-api.herokuapp.com/publication
app.post("/publication", async(req, res) => {
    const addNewPublication= await PublicationModel.create(req.body);
    return res.json({publisherAdded: addNewPublication, message: "Publisher was added"});
});


/*
Route            /book-update/:id
Description      Update a book in books collection using the given book _id
Access           PUBLIC
Parameter        NONE
Methods          PUT
*/
//Eg: https://booksite-api.herokuapp.com/book-update/61edbac32ed756bc095333a0
app.put("/book-update/:id", async (req, res) => {
    const {id} = req.params;
    const updatedBook = await BookModel.findByIdAndUpdate(id, req.body, {new: true});
    if(updatedBook==null){
        return res.json({"error":`No book found for given id ${id}`})
    }
    return res.json( {bookUpdated: updatedBook, message: "Book was updated !!!"} );
});


/*
Route            /book-update/:isbn
Description      Update a book in books collection using the given book ISBN
Access           PUBLIC
Parameter        NONE
Methods          PUT
*/
//Eg: https://booksite-api.herokuapp.com/book-update/book-isbn/123Two
app.put("/book-update/book-isbn/:isbn", async (req, res) => {
    const {isbn} = req.params;
    const updatedBook = await BookModel.findOneAndUpdate({ISBN: isbn}, req.body, {new: true});
    if(updatedBook==null){
        res.json({"error":`No book found for given isbn ${isbn}`})
    }
    return res.json( {bookUpdated: updateBook, message: "Book was updated !!!"} );
});


/*
Route            /author-update/:id
Description      Update an author in authors collection using the given author's _id
Access           PUBLIC
Parameter        NONE
Methods          PUT
*/
//Eg: https://booksite-api.herokuapp.com/author-update/61eeaec145930a7d8c9d6d60
app.put("/author-update/:id", async (req, res) => {
    const {id} = req.params;
    const updatedAuthor = await AuthorModel.findOneAndUpdate({_id: id}, req.body, {new: true});
    if(updatedAuthor==null){
        res.json({"error":`No author found for given _id ${id}`});
    }
    return res.json( {authorUpdated: updatedAuthor, message: "Author was updated !!!"} );
});


/*
Route           /publication-update/:id
Description      Update a publication in publications collection using given publication's _id
Access           PUBLIC
Parameter        NONE
Methods          PUT
*/
//Eg: https://booksite-api.herokuapp.com/publication-update/61eeaf3645930a7d8c9d6d67
app.put("/publication-update/:id", async(req, res) => {
    const {id}=req.params;
    const updatedPublisher = await PublicationModel.findOneAndUpdate({_id:id},req.body, {new:true});
    if(updatedPublisher==null){
       return res.json({"error":`No publication found for given _id ${id}`})
    }
    return res.json({publisherUpdated: updatedPublisher, message: "Publisher was updated !!!"});
});


/*
Route           /book-delete/:id
Description      Delete a book from books collection using given book _id
Access           PUBLIC
Parameter        NONE
Methods          DELETE
*/
//Eg: https://booksite-api.herokuapp.com/book-delete/61eeb37345930a7d8c9d6d7e
app.delete("/book-delete/:id", async (req, res) => {
    const {id} = req.params;
    const deletedBook = await BookModel.findByIdAndDelete(id,{new:true});
    if(deletedBook==null){
        return res.json({"error":`No book found to delete for given _id ${id} `});
    }
    return res.json( {bookDeleted: deletedBook, message: "Book was Deleted !!!"} );
});


/*
Route           /book-delete/:isbn
Description      Delete a book from books collection using given book ISBN
Access           PUBLIC
Parameter        NONE
Methods          DELETE
*/
//Eg: https://booksite-api.herokuapp.com/book-delete/book-isbn/12345ONE
app.delete("/book-delete/book-isbn/:isbn", async (req, res) => {
    const {isbn} = req.params;
    const deletedBook = await BookModel.deleteOne({ISBN: isbn});
    if(deletedBook.deletedCount===0){
        return res.json({"error":`The book with the isbn ${isbn} doesn't exist to delete`})
    }
    return res.json( {bookDeleted: deletedBook, message: "Book was Deleted !!!"} );
});


/*
Route           /book-author-delete/:isbn/:id
Description      Delete an author entry of a book from the books collection using the given book's ISBN
Access           PUBLIC
Parameter        NONE
Methods          DELETE
*/
//Eg: https://booksite-api.herokuapp.com/book-author-delete/231egh/61eeaec145930a7d8c9d6d60
app.delete("/book-author-delete/:isbn/:id", async (req, res) => {
    const {isbn, id} = req.params;
    let getSpecificBook = await BookModel.findOne({ISBN: isbn});
    if(getSpecificBook==null) {
        return res.json({"error": `No Book found to delete author for the ISBN of ${isbn}`});
    }
    else {
        getSpecificBook.authors.remove(id);
        const updatedBook = await BookModel.findOneAndUpdate({ISBN: isbn}, getSpecificBook, {new: true});
        return res.json( {bookUpdated: updatedBook, message: "Author was Deleted from the Book !!!"} );
    }
});


/*
Route           /author-book-delete/:id/:isbn
Description      Delete a book ISBN entry of an author in authors collection using the given book ISBN and author's _ID
Access           PUBLIC
Parameter        NONE
Methods          DELETE
*/
//Eg: https://booksite-api.herokuapp.com/author-book-delete/61eeaec145930a7d8c9d6d61/3469ab
app.delete("/author-book-delete/:id/:isbn", async(req, res) => {
    const {isbn, id}= req.params;
    let getSpecificAuthor = await AuthorModel.findOne({_id:id});
    if(getSpecificAuthor==null) {
        return res.json({"error": `No Author found to delete for the _id of ${id}`});
    }
    else {
        getSpecificAuthor.books.remove(isbn);
        const updatedAuthor = await AuthorModel.findOneAndUpdate({_id:id}, getSpecificAuthor, {new: true});
        return res.json({updatedAuthor, message: "Book was Deleted from the Author !!!"});
    }
});


/*
Route           /author-delete/:id
Description      Delete an author from authors collection  using the given author's _ID
Access           PUBLIC
Parameter        NONE
Methods          DELETE
*/
//Eg: https://booksite-api.herokuapp.com/author-delete/61eeaec145930a7d8c9d6d62
app.delete("/author-delete/:id",  async(req, res) => {
const {id}= req.params;
let authorDeleted = await AuthorModel.findByIdAndRemove(id);
if(authorDeleted==null) {
    return res.json({"error": `No Author found to delete for the _id of ${id}`});
}
return res.json({authorDeleted, message: "Author was deleted !!!"});
});


/*
Route           /publication-delete/:id
Description      Delete a publication from publications collection  using the given publication's _ID
Access           PUBLIC
Parameter        NONE
Methods          DELETE
*/
//Eg: https://booksite-api.herokuapp.com/publication-delete/61eeaf3645930a7d8c9d6d68
app.delete("/publication-delete/:id", async(req, res) => {
const {id}=req.params;
let publicationDeleted = await PublicationModel.findByIdAndRemove(id);
if(publicationDeleted==null){
    return res.json({"error": `No Publication found to delete for the _id of ${id}`});
}
return res.json({publicationDeleted, message: "Publication was deleted !!!"});
});




//Port configuration
const port= process.env.PORT|| 3000;
app.listen(port, () => {
    console.log("MY EXPRESS APP IS RUNNING.....")
});