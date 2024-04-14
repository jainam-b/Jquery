var fs=require('fs');

//read file required file
fs.readFile('page_a.html',function(err,data){
    if(err) throw err;
    // 'data' is a buffer containing file content
    console.log(data.toString('utf8'))
})