import { DataTypes } from 'sequelize'
// eslint-disable-next-line import/extensions
import sequelize from '../config/sequelize'

const Token = sequelize.define('token', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  uid: DataTypes.INTEGER,
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  blacklisted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  expires: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
  },
})

export default Token
