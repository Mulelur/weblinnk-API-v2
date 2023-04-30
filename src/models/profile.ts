import { DataTypes } from 'sequelize'
// eslint-disable-next-line import/extensions
import sequelize from '../config/sequelize'

const Profile = sequelize.define('profile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  uid: DataTypes.TEXT,
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Profile
