//Receiving in log file
//node watch

const http = require('http');
const fs = require('fs');


const port = 3000;

const server = http.createServer((req, res) => {
    const now = new Date().toLocaleString();

    const logMessage = `${now} ${req.url}: New Request Received`;

    fs.appendFile("request_logs.txt", logMessage + "\n", (error) => {
        if (error) console.log(error);
    });

    // Routes

    if(req.url === "/") {
        res.writeHead(200,{"Content-type": "text/plain"});
        res.end("Home_page");
    }

    else if(req.url ===  "/about"){
        res.writeHead(200,{"Content-type": "text/plain"});
        res.end("About_page");
    }

    else if(req.url === "/contact"){
        res.writeHead(200,{"Content-type": "text/plain"});
        res.end("Contact_page");

    }else{
        res.writeHead(404,{"Content-type": "text/plain"});
        res.end("page not found");
    }
});

server.listen(port, () => {
    console.log(`Server is up at http://localhost:${port}`);
});