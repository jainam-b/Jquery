var mydata=[
    {name:"Jainam",email:"j@gmail.com"},
    {name:"pinky",email:"p@gmail.com"},
    {name:"kartik",email:"k@gmail.com"},
    {name:"karan",email:"ka@gmail.com"},
];

var mykeys=Object.keys(mydata);
console.log(mykeys);

mykeys.forEach((keys,index) => {
    console.log(keys,mydata[keys]);
});

// so to access the every value from every row we can use object.property notation 
mykeys.forEach((keys,index) => {
    console.log(keys,mydata[keys].name,mydata[keys].email );
});