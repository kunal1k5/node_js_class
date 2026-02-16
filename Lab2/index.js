const express = require("express");
const path = require("path");
const { title } = require("process");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home_Page",
    name: "SectionZ"
  });

});

app.get("/about", (req, res) => {
  res.render("about",{
    title:"About_us"
  });
});

app.get("/contact", (req, res) => {
  res.render("contact",{
    title:"Contact_us"
  });
});


app.listen(port, () => {
  console.log(`server is running up on port ${port}`);
});