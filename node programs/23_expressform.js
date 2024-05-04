const express = require("express");
const mysql = require("mysql");
const app = express();

 

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jainam",
  database: "AWS",
});

//connect to the mysql database

connection.connect((err) => {
  if (err) {
    console.error("error connecting to the database: " + err.stack);
    return;
  }

  console.log("Connected to the database as ID " + connection.threadId);
});

//define a default route /
app.get("/", (req, res) => {
  res.send("welcome- crud operations are at /api/get /api");
});

app.get("/23_form", (req, res) => {
  res.sendFile(__dirname + "/23_form.html");
});



//define the get route
app.get("/api/users", (req, res) => {
  //fetch users from the database
  connection.query("select * from studentsinfo", (error, results) => {
    if (error) {
      console.error("Error fetching users from the database " + error.stack);
      return res.status(500).json({ error: "Failed to fetch users" });
    }

    //send the fetched data as a response
    res.json(results);
  });
});

//Middleware to parse JSON in the request body
app.use(express.json());

//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

 

//Define a POST route to add a new user
app.post("/api/users", (req, res) => {
  const name = req.body.name;
  const emailid = req.body.emailid;
  console.log(req.body.name);
  console.log(req.body.emailid);
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  //Insert the new user in the database
  const sqlqry = "Insert into studentsinfo(name,emailid) values(?,?)";
  connection.query(sqlqry, [name, emailid], (error, results) => {
    if (error) {
      console.error("Error inserting user into the database " + error.stack);
      return res.status(500).json({ error: "Failed to insert user" });
    }
    //send the success response
    res.json({ message: "User inserted successfully" });
  });
});

//Define a DELETE route to delete a user
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  console.log(req.params);
  //Delete the user from the database
  connection.query(
    "DELETE FROM studentsinfo where uid=?",
    [userId],
    (error, results) => {
      if (error) {
        console.error("Error deleting user from the database " + error.stack);
        return res.status(500).json({ error: "Failed to delete user" });
      }

      if (results.affectedRowas === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      //send a success reponse
      res.json({ message: "User deleted successfully" });
    }
  );
});

//start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
