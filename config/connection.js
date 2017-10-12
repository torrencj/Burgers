var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "lu11wii0e5uuoh7l",
  password: "cdm8nkoo4hsls9s9",
  database: "burgersdb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
