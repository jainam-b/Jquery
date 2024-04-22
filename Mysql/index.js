var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jainam",
  database: "AWS",
});

// TO CREATE THE TABLE
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('John', 'Highway 71')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var myquery = " select * from customers;";
  con.query(myquery, function (err, result) {
    if (err) throw err;
    console.log(result);


    Object.keys(result).forEach(function (key) {
      var myrow = result[key];
      console.log(myrow.id, myrow.name, myrow.address);
    });
    
  });
});
