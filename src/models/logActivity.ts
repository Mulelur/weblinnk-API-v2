import { DataTypes } from 'sequelize'
// eslint-disable-next-line import/extensions
import sequelize from '../config/sequelize'

const Logs = sequelize.define('logs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  uid: DataTypes.TEXT,
  clientPlatform: DataTypes.TEXT,
  creationTime: {
    type: DataTypes.DATE,
    unique: true,
  },
  lastSignInTime: {
    type: DataTypes.DATE,
    unique: true,
  },
})

export default Logs
