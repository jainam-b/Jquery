var http = require("http");
var formidable = require("formidable");
var mysql = require("mysql");
var db_config = require("./db_config");
var con = mysql.createConnection(db_config);

http
  .createServer(function (req, res) {
    if (req.url == "/addrecord") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields) {
        console.log(fields);
        let user = fields.username;
        let email = fields.useremail;

        con.connect(function (err) {
          if (err) {
            return console.error("error: " + err.message);
          } else console.log("Connected");
        });

        let myquery =
          "insert into studentsinfo(name,emailid) values('" +
          user +
          "','" +
          email +
          "')";

        con.query(myquery, function (err, result) {
          if (err) {
            console.log(err.message);
          } else console.log("Success");

          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="addrecord" method="post" enctype="multipart/form-data">'
      );
      res.write("Enter name" + '<input type="text" name="username">' + "<br>");
      res.write(
        "Enter Email" + '<input type="email" name="useremail">' + "<br>"
      );
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
