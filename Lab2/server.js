const express = require("express");

const app = express();
const port = 8080;

app.get("/",(req,res) =>{
    res.send("welcome to express js updated")
});

app.get("/view",(req,res)=>{
    res.send("this is my view page ")
});

app.listen(port,()=>{
    console.log(`server is up ${port}`);
})