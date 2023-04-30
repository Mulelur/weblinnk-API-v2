import { Router } from 'express'
import usersController from '../controllers/user/users.controllers'

const router = Router()

router.post('/', usersController.createUser)
router.post('/verify-token', usersController.verifyToken)

export default router
