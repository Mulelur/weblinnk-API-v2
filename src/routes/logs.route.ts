import { Router } from 'express'
import logsController from '../controllers/Logs/logs.controller'

const router = Router()

router.post('/', logsController.createLogs)
router.get('/', logsController.getLogs)

export default router
