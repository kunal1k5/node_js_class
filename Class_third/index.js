// let nodejs = require("./message")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

        if(req.url === "/"){
            res.setHeader('Content-Type', 'text/html');
            res.write("<h1>this is my main home page</h1>")
        }
        else if(req.url === "/about_us"){
            res.setHeader('Content-Type', 'text/plain');
            res.write("this is my about us page")
        }
        else if(req.url === "/contact"){
            res.setHeader('Content-Type', 'text/plain');
            res.write("this is my contact my us page")
        }
        else{
            res.write("404 page not found")
        }
        res.end();
    //     setHeadr('Content-type', 'application/json')
    //     res.write({
    //         id:1    
    // })

    // JSON --- JavaScript Object Notation
    // JSON store the value in key vlue
    // eg:{
        //     id : 1;
        //     name : "GLA University"
        // }

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});