import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

async function connectDatabase(){
await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.brp8cuh.mongodb.net/AtividadeFinalN695?retryWrites=true&w=majority&appName=Cluster0`)
}

export default connectDatabase