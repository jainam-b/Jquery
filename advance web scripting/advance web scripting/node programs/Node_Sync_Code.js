const fs = require('fs'); //fs in () is module like http

console.log("\n\nFile reading will start \n\n");

let data =  fs.readFileSync('./Sync_Async.txt', {encoding : 'utf8', flag : 'r'});

console.log(data)

console.log("\n\nFile reading is completed.")