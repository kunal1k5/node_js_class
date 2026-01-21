// ASYNC file----------

let fs = require('fs');

// fs.writeFile("demo.txt","welcome to file module",(err) =>{
//     if(err){
//         console.log("Error creating file");
//     }
//     else{
//         console.log("Async file created");
//     }
// });

// let fs = require('fs');
// fs.writeFileSync("syncFile.txt", "Welcome to file system sync file");
// console.log("Sync file created");


// Read a File Async

// fs.readFile("asyncFile.txt","utf8",(err,data) => {
//     if(err){
//         console.log("Error reading file");
//     }
//     else{
//         console.log("Async File Data",data);
//     }
// });


// Read a File Sync

// const data = fs.readFileSync("syncFile.txt","utf8");
// console.log("sync file created");


// Append data to file --------- Async

// fs.appendFile("asyncFIle.txt","\nNew data added",(err) =>{
//     if(err){
//         console.log("Error appending");
//     }
//     else{
//         console.log("Async data appended");
//     }
// });

// Append data to file --------- Sync

// fs.appendFileSync("syncFile.txt","\nNew data added");
// console.log("Sync data append");


// Rename a file ----------- Async

fs.rename("asyncFile.txt","asyncRenamed.txt",(err) => {
    if(err){
        console.log("Rename failed");
    }
});

// Rename a file ----------- Sync

fs.renameSync("syncFile.txt","syncRenamed.txt");
console.log("sync file renamed");