const express = require("express");
const router = express.router();

let courses = [];
let id = 1;

//page route------

router.get("/",(req,res) =>{
    res.render("course",{
        title: "course"
    });
});

//set all courses 

router.get("/api",(req,res)=>{
    res.json(courses);
})

// to add course
router.post("/api",(req,res)=>{
    const{name} = req.body;

    const newCourse = {
        id: id++,
        name
    };
    courses.push(newCourse);
    
    res.json(newCourse)
});

//To Update the course---

router.put("/api/:id",(req,res)=>{
    const updateCourse = parseInt(req.params.id);

    courses = courses.filter(key => key.id == updateCourse);
    const{name} = req.body;

    if(courses){
        course.name = name;
    }
    res.jason(course)
});