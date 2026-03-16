// Reading File Data on server
const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => (

if (req.url === "/") {

    fs.readFile("data.txt", "utf-8", (err, data) => {

        if (err) (res.end("file not found"); return
    }

res.end(data);
})
)
});

server.listen(port, () => {
    console.log(Server is up at http://localhost:$(port)
});