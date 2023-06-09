import express, { Request, Response } from 'express'
import compression from 'compression' // compresses requests
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import path from 'path'

import { config as dotenvConfig } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// eslint-disable-next-line import/extensions
import routes from './routes/routes'
// eslint-disable-next-line import/extensions
// import sendEmailToUser from './helpers/emails'

const app = express()

dotenvConfig({ path: path.join(__dirname, '.env') })
// view engine setup
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// sendEmailToUser('rotondwamulelu@gmail.com', 'new Account', 'hello this is test')

const shouldCompress = (req: Request, res: Response) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use(cors())

app.use(compression({ filter: shouldCompress }))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Security
app.use(helmet())

// Initialize routes

routes(app)

// app.use((req: Request, res: Response, next: any) => {
//   return next({
//     status: 404,
//     message: 'Not found',
//   })
// })

// error handler middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use((error: any, req: Request, res: Response) => {
//   return res.status(error.status || 500).send({
//     success: false,
//     error: error.message || 'Internal Server Error',
//   })
// })

export default app
