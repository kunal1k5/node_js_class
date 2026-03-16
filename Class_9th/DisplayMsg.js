//Display message through the url

const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    if(query.message) {
        fs.writeFile("user.txt",query.message,()=>{
            res.end("Data save successful");
        })
    }else{
        res.end("Please provide a message in the url");
    }
})

server.listen((port),()=>{
    console.log(`Server is up at http://localhost:${port}/?message="Hello"`);
})