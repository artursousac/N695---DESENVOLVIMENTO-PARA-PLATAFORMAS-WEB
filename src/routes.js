import { Router } from 'express'
import { publicRoute, getUsers, createUser, deleteUser, updateUser, getUserbyID, getUserbyIDs, getUserbyEmail, loginUser } from './controllers/UserController.js'

const routes = Router()

routes.get('/', publicRoute)

routes.get('/user', getUsers)

routes.get('/user/:id', getUserbyID)

routes.get('/users', getUserbyIDs)

routes.post('/user/email', getUserbyEmail)

routes.post('/auth/register', createUser)

routes.post('/auth/login', loginUser)

routes.delete('/user/:id', deleteUser)

routes.put('/user/:id', updateUser)

export default routes
