var http=require('http');
var fs=require('fs');

//create a http server
http.createServer(function(req,res){
    var filePath=req.url.substring(1);
    console.log(req.url.substring(1)); // output  /counter.txt 
    fs.readFile(filePath,function(err,data){
        //if file does not exist redirect it to error-404.html
        if(err){
            //redirect to with 302 Http code in response
            res.writeHead(302, {"location":"http://"+req.headers['host']+'/error-404.html'});
            return res.end();   // return is written because this will help if to get end 
        }
        res.writeHead(200);
        res.write(data.toString('utf8'));
        return res.end();
    });
}).listen(8085);