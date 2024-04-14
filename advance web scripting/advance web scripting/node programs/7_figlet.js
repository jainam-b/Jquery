let http=require('http');
let figlet=require('figlet');

let data=figlet.textSync("Hello world")

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello world!</h1><pre>'+data+'</pre>');
}).listen(8000);

console.log("Server running in localhost,port:8000");