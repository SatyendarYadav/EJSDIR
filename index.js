const express = require("express");
const app = express();
const path = require("path");

let port = 8055;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Listening on Port : ${port}`);
});