import mongoose from "mongoose"

const connect = () => {
    mongoose.connect(`mongodb+srv://artursousac:ZWw9iafqnMBeHOG4@cluster0.brp8cuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

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

export default connect

