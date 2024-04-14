var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello world from Hardik');
}).listen(8080);

console.log("Your server is running on port 8080")