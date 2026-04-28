const express = require("express");
const app = express();

//console.dir(app);

let port = 3000;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});


app.get("/",(req,res) => {
    res.send("you contacted root path dude");
});



//path parameters

app.get("/:username/:id", (req,res) =>{

    let{username,id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}</h1>`;
  // console.log(req.params);
  res.send(htmlStr);
    //res.send(`welcome to the page of @${username}.`);
});


// querry string

app.get("/search", (req,res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>nothing search</h1>");
    }
    res.send(`<h1>search result for querry : ${q}</h1>`);
});


//


// app.get("/help",(req,res) => {
//     res.send("you contacted help path");
// });

// app.get("/search",(req,res) => {
//     res.send("you contacted search path");
// });

// app.use((req, res) => {
//     res.status(404).send("404 - Not Found");
// });


// app.post("/",(req,res) => {
//     res.send("you sent a post request");
// });


// app.use((req,res) => {
//     console.log("request receive");
    //res.send("this is a basic response");

    // res.send(
    //     {name: "mango",
    //         colour: "yellow",
    //     }

    // );

//     let code = "<h1>fruits</h1> <ul><li>mango</li> <li>apple</li></ul>";
//     res.send(code);
// });