import { DataTypes } from 'sequelize'
// eslint-disable-next-line import/extensions
import sequelize from '../config/sequelize'

const Project = sequelize.define('project', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  uid: DataTypes.TEXT,
  site_name: DataTypes.TEXT,
  site_id: DataTypes.TEXT,
  site_url: DataTypes.TEXT,
  site_thumbnail: DataTypes.TEXT,
  published: DataTypes.BOOLEAN,
  site_status: {
    type: DataTypes.TEXT,
    defaultValue: 'site info',
  },
  logo: DataTypes.TEXT,
  other: DataTypes.JSON,
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
})

export default Project
