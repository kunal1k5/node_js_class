//const { write } = require("fs");
const {Writable} = require("stream");

const outStream = new Writable({
    write(chunk, encoding, callback){
        console.log(chunk.toString());
        callback();
    }
})

process.stdin.pipe(outStream);