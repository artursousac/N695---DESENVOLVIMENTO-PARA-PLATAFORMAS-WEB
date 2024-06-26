import User from '../models/user.js'
import bcrypt from 'bcrypt'


//Rota Pública
async function publicRoute(request, response){
    return response.status(200).json({message: "Rota Pública da API"})
}

async function getUsers(request, response){
    try{
    const users = await User.find()
    return response.status(200).json(users);
    }
    catch(error){
    return response.status(500).json({response: error.message})
    }
}

async function getUserbyID(request, response){
    const getUserbyID = await User.findById(request.params.id)

    if(!getUserbyID){
        return response.status(404).json({message: "Usuário não encontrado"})
    }

    response.status(200).json({getUserbyID})
}

async function getUserbyIDs(request, response){
    const inicio = (parseInt(request.query.inicio)) || 0
    const fim = parseInt(request.query.fim) || 10
    const intervalo = fim - inicio

    const users = (await User.find()).splice(inicio, fim+1)

    if(!users){
        return response.status(500).json({message: "Erro interno. Tente novamente"})
    }

    response.status(200).json({users})
}

async function getUserbyEmail(request, response){
    const { email } = request.body
    const getUserbyEmail = await User.findOne({email: email})

    if(!getUserbyEmail){
        return response.status(404).json({message: "Usuário não encontrado"})
    }

    response.status(200).json({id: getUserbyEmail.id})
}

async function createUser(request, response){
    //const newUser = await User.create(request.body)
    const {nome, email, senha, confirmacaoSenha} = request.body

    //Validações dos parametros da request
    if(!nome){
        return response.status(422).json({message: "O nome é obrigatório!"})
    }
    if(!email){
        return response.status(422).json({message: "O email é obrigatório!"})
    }
    if(!senha){
        return response.status(422).json({message: "A senha é obrigatória!"})
    }
    if(senha != confirmacaoSenha){
        return response.status(422).json({message: "As senhas não são iguais"})
    }

    //Verificação se o usuário já existe
    const userExists = await User.findOne({email: email})

    if(userExists){
        return response.status(422).json({message: "Este e-mail já foi cadastrado"})
    }

    //Criação da senha utilizando hash
    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    //Criação do usuário
    const newUser = await User.create({nome, email, senha: senhaHash})

    try{
        await newUser.save()
        response.status(201).json({message: "Usuário criado com sucesso"})
    }
    catch(error){
        console.log(error)

        response.status(500).json({message: "Erro no servidor, tente novamente"})
    }
}

async function loginUser(request, response){
    const {email, senha} = request.body

    //Validações dos parametros da request
    if(!email){
        return response.status(422).json({message: "O email é obrigatório!"})
    }
    if(!senha){
        return response.status(422).json({message: "A senha é obrigatória!"})
    }

    //Checagem para existência do usuário
    const user = await User.findOne({email: email})

    if(!user){
        return response.status(404).json({message: "Usuário não existe. Cadastre um novo ou utilize outro e-mail"})
    }

    const verificaSenha = await bcrypt.compare(senha, user.senha)

    if(!verificaSenha){
        return response.status(422).json({message: "Senha inválida"})
    }

    return response.status(200).json(user)
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

    return response.status(200).json({message: "Usuário Atualizado"})
    }
    catch(error){
    return response.status(400).json({response: error.message})   
    }
}

export { publicRoute, getUsers, createUser, deleteUser, updateUser, getUserbyID, getUserbyIDs, getUserbyEmail, loginUser }