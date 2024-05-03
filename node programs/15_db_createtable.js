var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"Hardik",
    password:"HG",
    database:"aws"
});

con.connect(function(err){
    if(err){
        return console.error('error: '+err.message);
    }

    else
        console.log("Connected");
});

let myquery='create table studentsinfo(name varchar(255),emailid varchar(255))';
con.query(myquery,function(err,result){
    if(err){
        console.log(err.message);
    }

    else
        console.log("Success");

    con.end();
});