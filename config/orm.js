var connection = require("../config/connection.js");

var orm = {
  selectAll: function(callback) {
    connection.query("SELECT * FROM burgers", function (err, data) {
      if (err) throw err;
      callback(data);
    });
  },

  insertOne: function(newBurger, callback) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, data) {
      if (err) throw err;
      callback(data);
    });
  },

  updateOne: function(burgerID, callback) {
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [burgerID], function(err, data) {
      if (err) throw err;
      callback(data);
    });
  }
}

module.exports = orm;
