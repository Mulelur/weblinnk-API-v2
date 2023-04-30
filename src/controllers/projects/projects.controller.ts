import { Request, Response } from 'express'
// eslint-disable-next-line import/extensions
// import sequelize from '../../config/sequelize'
// eslint-disable-next-line import/extensions
import Project from '../../models/project'
import { v4 as uuidv4 } from 'uuid'

const createProjects = async (req: Request, res: Response) => {
  //   const transact = await sequelize.transaction()
  try {
    const { uid, siteName, description, category } = req.body

    if (!siteName || !uid || !category) {
      return res.status(400).json({
        success: false,
        error: 'Missing fields',
      })
    }

    const siteId = uuidv4()

    const project = await Project.create({
      uid,
      site_name: siteName,
      site_id: siteId,
      published: false,
      description,
      category,
    })

    // transact.commit()

    return res.status(200).json({
      success: true,
      message: 'User created',
      data: project,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    // transact.rollback()

    return res.status(400).json({
      success: false,
      error: 'Error: something went wrong, please try agin later',
    })
  }
}

const getProjects = async (req: Request, res: Response) => {
  //   const transact = await sequelize.transaction()
  try {
    const { uid } = req.params

    // eslint-disable-next-line no-console
    console.log(uid)

    const project = await Project.findAll({
      where: {
        uid,
      },
    })

    // transact.commit()

    return res.status(200).json({
      success: true,
      message: 'User created',
      data: project,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    // transact.rollback()

    return res.status(200).json({
      success: false,
      message: 'error',
    })
  }
}

export default { createProjects, getProjects }
