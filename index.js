const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

const app = express();

let finalExamItems = ["Biology 101", "Calculus II", "World History", "Computer Science"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    let day = date.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: ["Buy Food", "Cook Food"],
        imageUrl: "http://maui.hawaii.edu/mli/wp-content/uploads/2014/04/UHMC-Header.jpg",
        logoUrl: "https://maui.hawaii.edu/wp-content/uploads/2021/02/official-seal.jpg"
    });
});

app.get("/finals", function(req, res) {
    res.render("list", {
        listTitle: "Final Exam Schedule",
        newListItems: finalExamItems
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
