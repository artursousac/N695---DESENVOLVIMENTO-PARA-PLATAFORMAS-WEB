import { Router } from 'express'
import { publicRoute, getUsers, createUser, deleteUser, updateUser, getUser, loginUser } from './controllers/UserController.js'

const routes = Router()

routes.get('/', publicRoute)

routes.get('/user', getUsers)

routes.get('/user/:id', getUser)

routes.post('/auth/register', createUser)

routes.post('/auth/login', loginUser)

routes.delete('/user/:id', deleteUser)

routes.put('/user/:id', updateUser)

export default routes
