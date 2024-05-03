var mycalculator = require('./5_udf_module_math');
//note extension not used

var x=6,y=10;

console.log("Addition of "+x+" and "+y+" is "+mycalculator.add(x,y));

console.log("Subraction of "+x+" and "+y+" is "+mycalculator.sub(x,y));

console.log("Multiplication of "+x+" and "+y+" is "+mycalculator.mult(x,y));

console.log("Division of "+x+" and "+y+" is "+mycalculator.div(x,y));

console.log("Factorial of "+x+" and "+y+" is "+mycalculator.fact(x,y));
