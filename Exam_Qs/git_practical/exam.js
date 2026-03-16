const fs = require("fs");

fs.writeFile("exam.txt","welcome",(err)=>{
    if(err){
        console.log("error");
    }else{
        console.log("created");
    }
});