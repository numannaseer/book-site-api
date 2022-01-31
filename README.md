# BOOK-SITE-API
Node.js, Express.js Backend API for maintaining Books, Authors and Publications in MongoDB corresponding to my BOOK-SITE website.


```
npm install

node index.js 
or
nodemon index.js
```
  
The API is developed using “Express.js” javascript library  (“Node.js” runtime environment). 
“MongoDB”  has been used to store the data related to various collections of BOOK-SITE website. 
“Mongoose” library is used to make requests to the MongoDB database. 
Refer the source code on github to get schema details: https://github.com/numannaseer/book-site-api  
The requests have been made using “POSTMAN” app. 
The various types of requests that can be made to this REST API are “GET”, “POST”, “PUT”, “DELETE”. 
Every response is in JSON format.
If you are interested in making requests yourself, you can make the requests at the backend that I have deployed at HEROKU:  https://booksite-api.herokuapp.com/  
Note: While making “POST” and “PUT” requests, do remember to insert the correct data in the request body. Refer schema in source code before making these two requests as Mongoose validation is involved in the backend.

Link to document containing screenshots of various Requests made to my BOOK-SITE's Backend REST API :  
https://docs.google.com/document/d/1sNGRzsTwm_hQyme-DKzWKeSYU4s0fR79swwAfi7sfc8/edit
