// get the data using http request
const http = require ("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req,res)=>{
    const date = new Date().toLocaleString();

    const logMessage = '${now}$ {req.url}: New Request Receive'
    console.log(logMessage);
})

// Gather data in chunk

