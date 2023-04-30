import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('weblinnkdb', 'rOUrDHAm', 'w&1E7ZER0gZ0lSJ^on%WIHrh', {
  host: 'weblinnkdb.ceuqepbib5y4.eu-north-1.rds.amazonaws.com',
  dialect: 'mysql',
})

;(async () => {
  await sequelize.sync({ force: true })
  // Code here
  try {
    await sequelize.authenticate()
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error)
  }
})()

export default sequelize
