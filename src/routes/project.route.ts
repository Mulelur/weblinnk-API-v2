import { Router } from 'express'
import projectsController from '../controllers/projects/projects.controller'

const router = Router()

router.post('/', projectsController.createProjects)
router.get('/:uid', projectsController.getProjects)

export default router
