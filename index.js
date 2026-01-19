const express = require("express");
const app = express();
const path = require("path");

let port = 8055;

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let rolldice = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice",{rolldice});
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", { data});   
    } else {
        res.render("error.ejs");
    }
});

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Listening on Port : ${port}`);
});