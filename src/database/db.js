import mongoose from 'mongoose'

async function connectDatabase(){
await mongoose.connect(
    `mongodb+srv://artursousac:ZWw9iafqnMBeHOG4@cluster0.brp8cuh.mongodb.net/AtividadeFinalN695?retryWrites=true&w=majority&appName=Cluster0`)
}

export default connectDatabase