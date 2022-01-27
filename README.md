# BOOK-SITE-API
Node.js, Express Backend API for maintaining Books, Authors and Publications in MongoDB corresponding to BOOK-SITE website.


```
npm install

node index.js 
or
nodemon index.js
```
This document contains screenshots of various Requests made to my BOOK-SITE’s Backend REST API.  
The API is developed using “Express js” javascript library  (“Node js” runtime environment). 
“MongoDB”  has been used to store the data related to various collections of BOOK-SITE API database. 
“Mongoose” library is used to make requests to the MongoDB database. 
Refer the source code on github to get schema details: https://github.com/numannaseer/book-site-api  
The requests have been made using “POSTMAN” app. 
The various types of requests that can be made to this REST API are “GET”, “POST”, “PUT”, “DELETE”. 
If you are interested in making requests yourself, you can make the requests at the backend that I have deployed at HEROKU:  https://booksite-api.herokuapp.com/  
Note: While making “POST” and “PUT” requests, do remember to insert the correct data in the request body. Refer schema in source code before making these two requests as Mongoose validation is involved in the backend.
