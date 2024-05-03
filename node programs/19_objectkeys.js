var test={name:'ravi',age:'22',city:'pune'};

var mykeys=Object.keys(test);
//print mykeys obtained from test object
console.log(mykeys);

//print each value from test object
//mykeys=>['name','age','city']

mykeys.forEach((key,index)=>{
    console.log(key,test[key]);
});