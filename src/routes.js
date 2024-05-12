import { Router } from 'express'
import { getUsers, createUser, deleteUser, updateUser, getUser } from './controllers/UserController.js'

const routes = Router()

routes.get('/users', getUsers)

routes.get('/users/:id', getUser)

routes.post('/users', createUser)

routes.delete('/users/:id', deleteUser)

routes.put('/users/:id', updateUser)

export default routes
