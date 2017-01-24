mysql = require("mysql");

var config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Timothy92",
  database: "burgers_db"
};

var connection = mysql.createConnection(config);

module.exports = connection;
