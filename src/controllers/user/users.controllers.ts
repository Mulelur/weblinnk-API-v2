import { Request, Response } from 'express'
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import User from '../../models/user'
import jwt from 'jsonwebtoken'
import { Op } from 'sequelize'
// eslint-disable-next-line import/extensions
// import sendEmailToUser from '../../helpers/emails'

const createUser = async (req: Request, res: Response) => {
  //   const transact = await sequelize.transaction()
  try {
    const { uid, verified, email, deleted } = req.body

    if (!uid && !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing fields',
      })
    }

    // Check if user with the same uid or email already exists
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ uid }, { email }],
      },
    })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists',
      })
    }

    const user = await User.create({
      uid,
      verified,
      email,
      deleted,
    })

    // Send email to the user
    // await sendEmailToUser(email, 'Welcome to our platform', 'Thank you for signing up.')

    return res.status(201).json({
      success: true,
      message: 'User created',
      data: user,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    // transact.rollback()

    return res.status(500).json({
      success: false,
      error: 'Something went wrong.',
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
    message: 'Token verified.',
    data: decoded,
  })
}

export default { createUser, verifyToken }
