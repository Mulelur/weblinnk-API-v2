import { Request, Response } from 'express'
// eslint-disable-next-line import/extensions
import Profile from '../models/profile'

const createProfile = async (req: Request, res: Response) => {
  const p = await Profile.create({
    name: 's',
    favoriteColor: 'fff',
    age: 45,
    cash: 67,
  })

  return res.status(200).json({
    success: 'true',
    message: 'profile created',
    data: p,
  })
}

export default { createProfile }
