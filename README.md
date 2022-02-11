# BOOK-SITE-API
A Node.js, Express.js Backend API for maintaining details regarding Books, Authors and Publications in 
MongoDB database. These details are used and generated by my website/book-site called bookdeets.com(Frontend yet to be developed).
Using this website, you can find the detailed info about various books published World Wide 
and you can also share your published book details if they are not present on the website already.

  
The API is developed using “Express js” javascript library (“Node js” runtime environment).
“MongoDB”  has been used to store the data collections of this book-site.
“Mongoose” library is used to make requests to the MongoDB database.
The requests have been made using “POSTMAN” app.
The various types of requests that can be made to this REST API are “GET”, “POST”, “PUT”, “DELETE”.
Every response is in JSON format.
If you are interested in making requests yourself, you can make the requests at the backend that I have deployed at HEROKU:  
https://booksite-api.herokuapp.com/

Note: While making “POST” and “PUT” requests, do remember to insert the correct data in the request body.
Refer ‘schema_details’ file in source code before making these two requests as Mongoose validation is involved in the backend. 
Also do refer the 'database' folder for info regarding actual data stored in MongoDB database collections.
Github link to the source code:
https://github.com/numannaseer/book-site-api


Link to document containing screenshots of various Requests made to bookdeets.com('s) Backend REST API :  
https://docs.google.com/document/d/1sNGRzsTwm_hQyme-DKzWKeSYU4s0fR79swwAfi7sfc8/edit
