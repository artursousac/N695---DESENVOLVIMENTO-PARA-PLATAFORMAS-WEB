import express from "express";
import mongoose from "mongoose";
//import User from './models'

const app = express();

app.use(express.json());

//import connection from './database/connection.js'

const users = [];

app.get("/users", (request, response) => {
    return response.json(users);
});

app.post("/users", (request, response) => {
    const { nome, email, senha, perfil } = request.body;

    users.push({ nome, email, senha, perfil });

    return response.json({ nome, email, senha, perfil });
});

mongoose.connect(
    `mongodb+srv://artursousac:ZWw9iafqnMBeHOG4@cluster0.brp8cuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(
        () => console.log("Banco de Dados conectado"))
        .catch(() => console.log("Falha na conexão"))
        
app.listen(3000);