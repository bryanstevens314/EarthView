const router = require('express').Router()
const {Earth} = require('../db/models')
// const axios = require('axios')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const earth = await Earth.findAll()
    res.send(earth)
  } catch (err) {
    next(err)
  }
})
