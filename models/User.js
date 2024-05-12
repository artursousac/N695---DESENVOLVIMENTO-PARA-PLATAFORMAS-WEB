import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: trusted
    },
    email: {
        type: String,
        required: trusted
    },
    senha: {
        type: String,
        required: trusted
    },
    perfil: {
        type: String,
        required: trusted
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('User', userSchema)