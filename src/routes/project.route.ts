import { Router } from 'express'
import projectsController from '../controllers/projects/projects.controller'

const router = Router()

router.post('/', projectsController.createProjects)
router.get('/', projectsController.getProjects)

export default router
