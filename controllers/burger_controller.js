//TODO NOT DONE YET.....

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//html routes
router.get('/', (req, res) => {
  burger.all(burgerlist => {
    // console.log(burgerlist);
    res.render('index', {burgerlist: burgerlist})
  })
})

//api routes
router.post('/api/new', (req, res) => {
  console.log(req.body);
  burger.create('burger_name', [req.body.name], function() {
    res.redirect('/');
  });
})

router.put('/api/eat/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  burger.update({eaten: 1}, 'id = '+req.params.id, function() {
    res.redirect('/');
  });
})

// Export routes for server.js to use.
module.exports = router;
