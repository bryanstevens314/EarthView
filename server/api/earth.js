const router = require('express').Router()
const {Earth, Satellite} = require('../db/models')
// const axios = require('axios')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const earth = await Earth.findAll()
    const satellite = await Satellite.findAll()
    res.send({
      earth,
      satellite
    })
  } catch (err) {
    next(err)
  }
})
