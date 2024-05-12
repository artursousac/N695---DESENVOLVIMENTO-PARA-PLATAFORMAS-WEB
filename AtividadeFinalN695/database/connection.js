const mongoose = require("mongoose")

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connect = () => {
    mongoose.connect(`mongodb+srv://artursousac:ZWw9iafqnMBeHOG4@cluster0.brp8cuh.mongodb.net/AtividadeFinalN695?retryWrites=true&w=majority&appName=Cluster0`)

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.error("Erro ao conectar com o mongoDB")
    })

    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso")
    })
}

connect();

module.exports = mongoose;

