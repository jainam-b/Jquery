var mydata=[
    {name:'Munnah',email:'mungunn'},
    {name:'Hardik',email:'hardikk'},
    {name:'amit',email:'amitt22'}
]

var mykeys=Object.keys(mydata);
//print mykeys obtained from test object
console.log();
console.log("type of keys ",typeof(mykeys));
console.log("mykeys",mykeys);
console.log();

//print each value from test object
//note this will print each record as such
// ['0','1','2']

mykeys.forEach((key,index)=>{
    console.log("inside for each",key,mydata[key]);
    //console.log(key,typeof(mydata[key]));
});

console.log();
//so to access every value from every row we can use object.property notation
mykeys.forEach((key,index)=>{
    console.log(key,index,mydata[key].name,mydata[key].email);
    //console.log(key,index,typeof(mydata[key].name))
});