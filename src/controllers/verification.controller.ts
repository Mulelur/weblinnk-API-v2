import { Request, Response } from 'express'
// eslint-disable-next-line import/extensions
// import Profile from '../models/profile'

// const getAuth = () => {}

const verifyToken = async (req: Request, res: Response) => {
  // Verify the ID token while checking if the token is revoked by passing
  // checkRevoked true.
  //   const checkRevoked = true
  //   const idToken = ''
  //   getAuth()
  //     .verifyIdToken(idToken, checkRevoked)
  //     .then(() => {
  //       // Token is valid.
  //     })
  //     .catch((error: { code: string }) => {
  //       if (error.code == 'auth/id-token-revoked') {
  //         // Token has been revoked. Inform the user to reauthenticate or signOut() the user.
  //       } else {
  //         // Token is invalid.
  //       }
  //     })
  return res.status(200).json({
    success: 'true',
    message: 'profile created',
    data: 'p',
  })
}

export default { verifyToken }
