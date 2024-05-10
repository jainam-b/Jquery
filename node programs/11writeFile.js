var fs=require('fs');
const data="jainam is writing the file using fs write module "
fs.writeFile('newfile.txt',data,function(err){
    if(err)
        console.log(err);
    else
        console.log('File is created successfully');
});