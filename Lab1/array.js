const students = [
    "karan","ranjeet","aditya","prakash","aman","sachin","deepak","raushan","raj","nishant"
];

const marks = [85, 84, 86, 87, 89, 88, 81, 82, 83, 86, 90];

const result = students.map(function (name, index) {
    return name + " " + marks[index];
});

console.log(result);

const fs = require("fs").promises;

(async () => {
    try {
        const file = await fs.open("array.js", "r");
        console.log("file opened");
        await file.close();
    } catch (error) {
        console.error("Error opening file:", error);
    }
})();