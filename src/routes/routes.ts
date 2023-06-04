import { Express } from 'express'

import profile from './profile.route'
import users from './users.route'
import project from './project.route'
import logs from './logs.route'

// const router = Router()

const Routes = (app: Express) => {
  app.use('/profile', profile)
  app.use('/users', users)
  app.use('/project', project)
  app.use('/logs', logs)
}

export default Routes
