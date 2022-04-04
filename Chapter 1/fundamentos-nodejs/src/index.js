const express = require("express");

const app = express();

app.get("/courses", (req, res) => {
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
});

app.post("/courses", (req, res) => {
    return res.json([
        "Curso 1", 
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

app.put("/courses/:id", (req, res) => {
    return res.json([
        "Curso 10", 
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

app.patch("/courses/:id", (req, res) => {
    return res.json([
        "Curso 10", 
        "Curso 20",
        "Curso 30",
        "Curso 40"
    ]);
});

app.delete("/courses/:id", (req, res) => {
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 4"
    ]);
});

app.listen(3333);