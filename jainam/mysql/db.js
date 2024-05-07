// import mysql module
const mysql=require('mysql');
// database info 
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"jainam",
    database:"AWS",
});
// connect with mysql 
con.connect(function(err){
    if (err ) throw err;
    else 
    console.log("connected ")
})