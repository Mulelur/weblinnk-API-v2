import { Request, Response } from 'express'
// eslint-disable-next-line import/extensions
// import sequelize from '../../config/sequelize'
// eslint-disable-next-line import/extensions
import User from '../../models/user'
import jwt from 'jsonwebtoken'

const createUser = async (req: Request, res: Response) => {
  //   const transact = await sequelize.transaction()
  try {
    const { uid, verified, email, deleted, token } = req.body

    const p = await User.create({
      uid,
      verified,
      email,
      deleted,
      token,
    })

    // transact.commit()

    return res.status(200).json({
      success: 'true',
      message: 'User created',
      data: p,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    // transact.rollback()

    return res.status(200).json({
      success: 'true',
      message: 'error',
    })
  }
}

const verifyToken = async (req: Request, res: Response) => {
  // Verify the ID token while checking if the token is revoked by passing
  // checkRevoked true.
  const { token } = req.body

  const decoded = jwt.decode(token)
  // eslint-disable-next-line no-console
  console.log(decoded)

  return res.status(200).json({
    success: 'true',
    message: 'profile created',
    data: decoded,
  })
}

export default { createUser, verifyToken }
