var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"Hardik",
    password:"HG",
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.end();
});