var fs = require('fs');
let http = require('http');

http.createServer(function(req, res) {
    var mycounter;
    fs.readFile('counter.txt', function(err, data) {
        if (err) throw err;
        mycounter = parseInt(data);
        console.log("parseInt",mycounter);
        mycounter++;
        console.log("after ++",mycounter);
        console.log(mycounter);

        fs.writeFile('counter.txt', mycounter.toString(), function(err) {
            if (err) throw err;
            console.log('\nVisitor counter updated!!');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>You are visitor number</h1><h2>' + mycounter + '</h2>');
            console.log("after write", mycounter);
            // console.log("<br>");
        });
    })
}).listen(8000);
