var orm = require("../config/orm.js");

var model = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    })
  },

  insertOne: function(newBurger, callback) {
    orm.insertOne(newBurger, function(res) {
      callback(res);
    })
  },

  updateOne: function(burgerID, callback) {
    orm.updateOne(burgerID, function(res) {
      callback(res);
    })
  }
}

module.exports = model;
