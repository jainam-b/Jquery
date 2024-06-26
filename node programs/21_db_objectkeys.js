var mysql = require("mysql");
var db_config = require("./db_config");
var con = mysql.createConnection(db_config);

con.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  } else console.log("Connected");
});

let myquery = "select * from studentsinfo";
con.query(myquery, function (err, result) {
  if (err) {
    console.log(err.message);
  }
  //printing the complete result object
  else console.log(result);
  console.log("log object keys",Object.keys(result));

  Object.keys(result).forEach(function (key) {
    var myrow = result[key];
    console.log("myrow", myrow);
    console.log(myrow.emailid, myrow.name);
  });
});

con.end(function (err) {
  if (err) {
    return console.log("error: " + err.message);
  }
  console.log();
  console.log("Close the database connection");
});
