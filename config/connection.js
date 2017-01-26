mysql = require("mysql");

var config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Timothy92",
  database: "burgers_db"
};

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  var connection = mysql.createConnection(config);
}

module.exports = connection;
