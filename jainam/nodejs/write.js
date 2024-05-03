var fs=require("fs");

fs.writeFile("mywriteFile.txt","hello jainam this is example of write to my file",function(err){
    if(err) throw err;
    console.log("saved");
})