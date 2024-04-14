var fs=require('fs');
let http=require('http');

var mycounter;
fs.readFile('counter.txt',function(err,data){
    if(err) throw err;
    mycounter=data;
    mycounter++;
    http.createServer(function(req,res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>You are visitor number</h1><h2>'+data+'</h2>');
    }).listen(8000);

    fs.writeFile('counter.txt',mycounter.toString(),function(err){
        if(err) throw err;
        console.log('\nVisitor counter updated!!');
    });
});