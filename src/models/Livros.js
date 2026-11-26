import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    autor: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
});

const livroModel = mongoose.model("livros", livroSchema);

export default livroModel;