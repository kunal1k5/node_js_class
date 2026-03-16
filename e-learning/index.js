const express = require("express");
const path = require("path");

const courses = require("./data/courses");

const port = 5000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ui"));

// Home page
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home_page",
    });
});

// About route
app.get("/about", (req, res) => {
    res.render("about", {
        title: "About_us",
    });
});

//Courses route
app.get("/courses", (req, res) => {
    res.render("Course", {
        title: "Courses",
        courses,
    });
});

// app.post("/courses", (req, res) => {
//   const course = { id: courses.length + 1, name: req.body.name };
//   courses.push(course);
//   res.send(course);
// });

// // READ (all)
// app.get("/courses", (req, res) => {
//   res.send(courses);
// });

// // READ (single)
// app.get("/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id == req.params.id);
//   if (!course) return res.status(404).send("Course not found");
//   res.send(course);
// });

// // UPDATE
// app.put("/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id == req.params.id);
//   if (!course) return res.status(404).send("Course not found");
//   course.name = req.body.name;
//   res.send(course);
// });

// // DELETE
// app.delete("/courses/:id", (req, res) => {
//   courses = courses.filter(c => c.id != req.params.id);
//   res.send("Course deleted");
// });



//practice route

app.get("/practice", (req,res)=>{
    res.render("practice", {
        title: "Practice",
    });
});

// server Listen
app.listen(port, () => {
    console.log(`server is up at ${port}`);
});