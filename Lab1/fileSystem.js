const fs = require("fs");
const fsPromises = fs.promises;
const { promisify } = require("util");

const kunal = promisify(fs.readFile);

fs.writeFile("cb.txt", "this is simple call_back file data", (error) => {
    if (error) {
        console.error("file is loading error", error);
        return;
    }

    console.log("file is created with simple call_back");

    // After the file is created, read it using promises and promisify
    readFileWithPromises();
    readWithPromisify();
});

async function readFileWithPromises() {
    try {
        const data = await fsPromises.readFile("cb.txt", "utf-8");
        console.log("async file data:", data);
    } catch (error) {
        console.log("Error is loading async file:", error);
    }
}

async function readWithPromisify() {
    try {
        const fileData = await kunal("cb.txt", "utf-8");
        console.log("reading the filedata with custom", fileData);
    } catch (error) {
        console.log(error);
    }
}



