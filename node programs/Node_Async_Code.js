const fs = require('fs')

fs.readFile('./Sync_Async.txt', { encoding : 'utf8', flag : 'r'},function(err, data){
    if(err){
        console.log(err);}
    else{
        console.log(data);
    }

    console.log("\n\nFile reading is completed.\n\n");
});

console.log("\n\nFile reading is processing. Once reading is done, you will see the output.\n\n");