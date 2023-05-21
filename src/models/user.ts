import { DataTypes, Model } from 'sequelize'
// eslint-disable-next-line import/extensions
import sequelize from '../config/sequelize'

interface UserAttributes {
  id: number
  email: string
  uid: string
  deleted: boolean
  verified: boolean
  created_at: Date
}

class User extends Model implements UserAttributes {
  public id!: number

  public email!: string

  public uid!: string

  public deleted!: boolean

  public verified!: boolean

  public readonly created_at!: Date
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    uid: { type: DataTypes.TEXT, unique: true, allowNull: false },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    created_at: { type: DataTypes.DATE },
  },
  {
    tableName: 'users',
    sequelize: sequelize,
    timestamps: false,
  },
)

export default User
