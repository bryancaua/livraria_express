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

function findBook(id) {
    return livros.findIndex((livro) => {
       return livro.id === Number(id);
    });
}

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

app.get("/livros/:id", (req, res) => {
    const index = findBook(req.params.id);
    res.status(200).json(livros[index]);
})

app.put("/livros/:id", (req, res) => {
    const index = findBook(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = findBook(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluído com sucesso!");
})

export default app;