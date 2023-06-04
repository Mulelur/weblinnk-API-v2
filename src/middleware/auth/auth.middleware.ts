/* eslint-disable import/extensions */
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import User from '../../models/user'

type Token = {
  iss: string
  aud: string
  auth_time: number
  user_id: string
  sub: string
  iat: number
  exp: number
  email: string
  email_verified: boolean
  firebase: { identities: { email: string[] }; sign_in_provider: string }
}

const tokenRequired = async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization

  const token = authHeader && authHeader.split(' ')[1]

  const decoded = jwt.decode(token || '')

  const res: any = await axios.get(
    'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com',
  )

  const publicKeys = res.data

  if (!token) {
    return response.status(401).json({ success: false, error: 'Access denied' })
  }

  const header64 = token.split('.')[0]

  const header = JSON.parse(Buffer.from(header64, 'base64').toString('ascii'))

  const { sub: userId } = decoded as Token

  const userExist = await User.findOne({
    where: { uid: userId, deleted: false },
    attributes: ['uid', 'verified'],
  })

  if (!userExist) {
    return res.status(401).json({ success: false, error: 'Access denied' })
  }

  return jwt.verify(token, publicKeys[header.kid], { algorithms: ['RS256'] }, (err, user) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err)

      return response.status(401).json({ success: false, error: 'Access denied' })
    }

    request.body.user = user

    return next()
  })
}

export default tokenRequired
