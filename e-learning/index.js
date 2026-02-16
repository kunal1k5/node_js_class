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

// Courses route
app.get("/courses", (req, res) => {
    res.render("Course", {
        title: "Courses",
        courses,
    });
});

// Contact route
app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact_us",
    });
});

// Services route
app.get("/services", (req, res) => {
    res.render("services", {
        title: "Our_Services",
    });
});

// server Listen
app.listen(port, () => {
    console.log(`server is up at ${port}`);
});