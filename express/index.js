const express=require("express");
const app=express();
const port=3000;
app.use(express.json());

app.get("/",function(req,res){
    res.send("hello world");
});

app.get("/form",function(req,res){
    res.send(__dirname,"./form.html")
});

app.listen(port,function(){
    console.log("Running on port 3000");
});
