// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", cb);
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, cb);
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
