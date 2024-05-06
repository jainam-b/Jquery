const mysql=require('mysql');
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"jainam",
    database:"AWS",
});

con.connect(function(err){
    if (err ) throw err;
    else 
    console.log("connected ")
})