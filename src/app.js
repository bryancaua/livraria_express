import express, { json } from "express";
import connectDataBase from "./config/dbConnect.js";
import livroModel from "./models/Livros.js";

const connection = await connectDataBase();

connection.on("error", (error) => {
    console.error("Erro de conexão", error);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados bem sucedida!");
})

const app = express();
app.use(json());

function findBook(id) {
    return livros.findIndex((livro) => {
       return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js com express");
})

app.get("/livros", async (req, res) => {
    const listaLivros = await livroModel.find({});
    res.status(200).json(listaLivros);
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

