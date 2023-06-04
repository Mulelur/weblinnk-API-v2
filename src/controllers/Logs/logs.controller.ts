/* eslint-disable import/extensions */
import { Request, Response } from 'express'
// eslint-disable-next-line import/extensions
import Logs from '../../models/logActivity'

const createLogs = async (req: Request, res: Response) => {
  try {
    const { user, clientPlatform, creationTime, lastSignInTime } = req.body
    if (!creationTime || !clientPlatform || !lastSignInTime) {
      return res.status(400).json({
        success: false,
        error: 'Missing fields',
      })
    }

    const isCreated = await Logs.findAll({
      where: {
        uid: user.sub,
        creationTime,
        lastSignInTime,
      },
    })

    if (isCreated.length > 0) {
      return res.status(204).json({
        success: true,
        message: 'Info: Not Created',
      })
    }

    const logs = await Logs.create({
      uid: user.sub,
      clientPlatform,
      creationTime,
      lastSignInTime,
    })

    return res.status(200).json({
      success: true,
      message: 'Info: Log created',
      data: logs,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    // transact.rollback()

    return res.status(500).json({
      success: false,
      error: 'Error: something went wrong, please try agin later',
    })
  }
}

const getLogs = async (req: Request, res: Response) => {
  //   const transact = await sequelize.transaction()
  try {
    const { user } = req.body

    const logs = await Logs.findAll({
      where: {
        uid: user.sub,
      },
    })

    return res.status(200).json({
      success: true,
      data: logs,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return res.status(500).json({
      success: false,
      message: 'Error: Something went wrong.',
    })
  }
}

export default { createLogs, getLogs }
