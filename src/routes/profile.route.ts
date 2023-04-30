import { Router } from 'express'
import profileController from '../controllers/profile.controller'

const router = Router()

router.post('/create', profileController.createProfile)

export default router
