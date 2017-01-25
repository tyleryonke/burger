var connection = require("../config/connection.js");


var model = {
  getAll: function(callback) {
    connection.query("SELECT * FROM burgers", function (err, data) {
      if (err) throw err;
      callback(data);
    });
  },

  createNew: function(newBurger, burgerDevoured, callback) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, data) {
      if (err) throw err;
      callback(data);
    });
  },

  devourOne: function(burgerID, callback) {
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [burgerID], function(err,data) {
      if (err) throw err;
      callback(data);
    });
  }
}

module.exports = model;
