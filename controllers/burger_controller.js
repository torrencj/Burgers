//TODO NOT DONE YET.....

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//html routes
router.get('/', (req, res) => {
  burger.all(burgerlist => {
    console.log(burgerlist);
    res.render('index', burgerlist)
  })
})


//api routes
router.post('/api/new', (req, res) => {
  console.log(req.body);
  burger.create('burger_name', [req.body.name], function() {
    res.redirect('/');
  });
  // res.redirect('/');
})

router.post('/api/eat', (req, res) => {

})

// Export routes for server.js to use.
module.exports = router;
