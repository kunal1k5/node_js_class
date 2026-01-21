const fs = require("fs");
fs.writeFile(
    "secure.txt",
    "Private Data",
    {flag: "w", mode:0o600},
    () => console.log("Secure file created")
);

//LAB1: 

//Read File Using r Flag-------

// const fs = require("fs");
fs.readFile("secure.txt",{flag:"r",encoding:"utf8"},(err, data)=>{
    if (err) throw err;
    console.log(data);
});

//LAB 2:
// Write File Using w Flag-----

fs.writeFile("secure.txt","Hello World",{flag:"w"}, ()=> {
    console.log("File written");
});