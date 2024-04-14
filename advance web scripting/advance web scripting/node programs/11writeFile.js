var fs=require('fs');

fs.writeFile('newfile.txt','\n I am fine \n',function(err){
    if(err)
        console.log(err);
    else
        console.log('File is created successfully');
});