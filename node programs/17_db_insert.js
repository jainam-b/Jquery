var mysql=require('mysql');
var db_config = require('./db_config');
var con=mysql.createConnection(db_config);

con.connect(function(err){
    if(err){
        return console.error('error: '+err.message);
    }

    else
        console.log("Connected");
});

let myquery="insert into studentsinfo(name,emailid) values('jojo','jojo@cnn.net')";
con.query(myquery,function(err,result){
    if(err){
        console.log(err.message);
    }

    else
        console.log("Success");

    con.end();
});