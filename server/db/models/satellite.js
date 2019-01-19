const Sequelize = require('sequelize')
const db = require('../db')

const Satellite = db.define('satellite', {
  X: {
    type: Sequelize.DECIMAL
  },
  Y: {
    type: Sequelize.DECIMAL
  },
  Z: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Satellite
