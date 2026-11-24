import express, { json } from "express";

const app = express();
app.use(json());

const livros = [
    {
        id: 1,
        titulo: "o mistério dos 7 relógios"
    },
    {
        id: 2,
        titulo: "assassinato no expresso do oriente"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js com express");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!")
})

export default app;