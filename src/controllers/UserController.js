import User from '../models/user.js'

async function getUsers(request, response){
    try{
    const users = await User.find()

    return response.status(200).json(users);
    }
    catch(error){
    return response.status(500).json({response: error.message})
    }

}

async function getUser(request, response){
    try{
    const getUser = await User.findById({_id: request.params.id})

    return response.status(200).json(getUser);
    }
    catch(error){
    return response.status(400).json({response: error.message})   
    }
}

async function createUser(request, response){
    try{
    const newUser = await User.create(request.body)

    return response.status(201).json(newUser)
    }
    catch(error){
    return response.status(400).json({response: error.message})
    }
}

async function deleteUser(request, response){
    try{
    await User.findByIdAndDelete({_id: request.params.id})

    return response.status(200).json({response: "Usuário Deletado"})
    }
    catch (error){
    return response.status(400).json({response: error.message})
    }
}

async function updateUser(request, response){
    try{
    await User.findByIdAndUpdate({_id: request.params.id}, request.body)

    return response.status(200).json({response: "Usuário Atualizado"})
    }
    catch(error){
    return response.status(400).json({response: error.message})   
    }
}

export { getUsers, createUser, deleteUser, updateUser, getUser }