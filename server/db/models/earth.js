const Sequelize = require('sequelize')
const db = require('../db')

const Earth = db.define('earth', {
  imageUrl: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING
  },
  month: {
    type: Sequelize.STRING
  },
  day: {
    type: Sequelize.STRING
  }
})

module.exports = Earth
