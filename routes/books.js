//this file will be where I will create the routes to show,post,update,delete books

//I will use the require method to require the express module
const express = require('express');

//Set up other routes by using the Router constructor to create a router instance
const router = express.Router();

var Book = require("../models").Book; //require book model into books.js route file

// create get /books - Shows the full list of books.
router.get('/', function(req, res) {
  Book.findAll();      
});

module.exports = router;