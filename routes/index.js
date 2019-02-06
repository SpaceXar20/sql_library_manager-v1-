//This file will be where I will create my home route

//I will use the require method to require the express module
 const express = require('express');

 //I will set up the routes by using the Router constructor to create a router instance
 const router = express.Router();

/*get / - Home route should redirect to the /books route, and catch for errors.*/
router.get('/'), function(req, res, next) {
    res.redirect('/books')
}.catch(function(err){
    res.send(500);
  })

 module.exports = router;