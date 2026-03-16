const fs = require("fs");

// fs.writeFile("exam.txt","welcome",(err)=>{
//     if(err){
//         console.log("error");
//     }else{
//         console.log("created");
//     }
// });

// const fs = require("fs");

// fs.writeFileSync("esyncxam.txt","welcome");
// console.log("created");


// const fs = require("fs");

// fs.readFile("exam.txt","utf8",(err,data) =>{
//     if(err){
//         console.log("erroe");
//     }else{
//         console.log("Async data",data);
//     }
// });

// const fs = require("fs");

// const data = fs.readFileSync("esyncxam.txt","utf8");
// console.log("read sync file",data);


// fs.appendFile("exam.txt","\n new add",(err)=>{
//     if(err){
//         console.log("error");
//     }else{
//         console.log("add");
//     }
// });

// fs.appendFileSync("exam.txt","\nniklo");
// console.log("sync created");

// fs.unlink("esyncxam.txt",(err)=>{
//     if(err){
//         console.log("error");
//     }else{
//         console.log("deleted");
//     }
// });

// fs.mkdir("myFolder",(err)=>{
//     if(err){
//         console.log("error");   

//     }else{
//         console.log("folder created");
//     }
// });

// fs.mkdirSync("myFolder1");
// console.log("sync folder created");

// fs.readdir("myFolder",(err,files)=>{
//     if(err){
//         console.log("error");
//     }else{
//         console.log("read");
//     }
// })


// fs.rmdir("myFolder",(err)=>{
//     if(err){
//         console.log("error");
//     }else{
//         console.log("deleted");
//     }
// });


// const http = require("http");
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     const log = `${newDate().toISOString()}`
// });


const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("hello world from node.js");
    res.write("hello");
    res.end();
});

server.listen(3000,() =>{
    console.log("server running at http://localhost:3000");
});