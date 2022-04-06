const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (req, res) => {
    const { page, order} = req.query;
    console.log(page)
    console.log(order)
    return res.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
});

app.post("/courses", (req, res) => {
    const body = req.body;
    return res.json(body);
});

app.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    console.log(id)
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