import { Router } from 'express'
import usersController from '../controllers/user/users.controllers'

const router = Router()

router.post('/', usersController.createUser)

export default router
