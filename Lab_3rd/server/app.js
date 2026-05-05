const express = require("express");
const path = require("path");

const app = express();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

// To read form data (POST body)
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login", { message: "please login" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render("login", {
      message: "Please enter username and password",
    });
  }

  res.render("Dashboard", {
    username,
    message: `welcome ${username}`,
  });
});

app.get("/dashboard", (req, res) => {
  res.render("Dashboard", { username: "User", message: "welcome user" });
});

module.exports = app;
