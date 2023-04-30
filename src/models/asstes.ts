import { DataTypes } from 'sequelize'
// eslint-disable-next-line import/extensions
import sequelize from '../config/sequelize'

const Assets = sequelize.define('assets', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  uid: DataTypes.INTEGER,
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  site_id: DataTypes.TEXT,
  logo: DataTypes.TEXT,
  other: DataTypes.BOOLEAN,
  description: {
    type: DataTypes.STRING,
  },
  created_at: DataTypes.DATE,
})

export default Assets
