const express = require("express");
const path = require("path");

const courseRoute = require("./data/courses");
const mongoose = require("mongoose");
const db = require("./db");
db();

const port = 5005;

const app = express();

//DataBase connection
mongoose.connect("mongodb://127.0.0.1:27017/e-learning")
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => console.error("Error connecting to MongoDB:", err));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "ui")));


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


//login route
app.get("/login", (req,res)=>{
    res.render("login", {
        title: "Login",
    });
});

//login post route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        if (user.password !== password) {
            return res.status(400).send("Invalid password");
        }
        res.send("Login successful");
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send("Internal server error");
    }
});


//register route
app.get("/register", (req,res)=>{
    res.render("register", {
        title: "Register",
    });
});


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