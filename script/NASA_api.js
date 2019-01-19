const axios = require('axios')
const apiKey = 'MbabfYGzgDZwXZVt30rWtxa0f3FTJ9DihBzOQsC4'
const {Earth} = require('../server/db/models')
const locationRequest = require('./sampleRequests')
let config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}
const fetchSatellites = async () => {
  try {
    const response = await axios.post(
      'https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/locations',
      locationRequest,
      config
    )
    if (response) {
      const Coordinates = response.data.Result.Data[1][0].Coordinates
      const X_COOR = Coordinates[1][0].X[1]
      const Y_COOR = Coordinates[1][0].Y[1]
      const Z_COOR = Coordinates[1][0].Z[1]
      let satellite = []
      X_COOR.map((item, index) => {
        satellite.push({
          X: X_COOR[index],
          Y: Y_COOR[index],
          Z: Z_COOR[index]
        })
      })

      return satellite
      // const Time = response.data.Time
      // const RadialLength = response.data.RadialLength
      // const MagneticStrength = response.data.MagneticStrength
      // const NeutralSheetDistance = response.data.NeutralSheetDistance
      // const BowShockDistance = response.data.BowShockDistance
      // const MagnetoPauseDistance = response.data.MagnetoPauseDistance
      // const DipoleLValue = response.data.DipoleLValue
      // const SpacecraftRegion = response.data.SpacecraftRegion
      // const RadialTracedFootpointRegions = response.data.RadialTracedFootpointRegions
      // const NorthBTracedFootpointRegions = response.data.NorthBTracedFootpointRegions
      // const SouthBTracedFootpointRegions = response.data.SouthBTracedFootpointRegions
    }
  } catch (err) {
    console.log('ERROR', err)
  }
}

const getEarth = async () => {
  let result = []
  let year = '2018'
  let month = '12'
  let day = '10'
  while (year !== '2017') {
    console.log('YEAR', year)
    while (month !== '11') {
      console.log('MONTH', month)
      while (day !== '00') {
        console.log('DAY', day)
        try {
          const response = await axios.get(
            `https://api.nasa.gov/EPIC/api/natural/date/${year}-${month}-${day}?api_key=${apiKey}`
          )
          await Promise.all(
            response.data.map(obj => {
              result.unshift({
                imageUrl: `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${
                  obj.image
                }.png`,
                year: year,
                month: month,
                day: day
              })
            })
          )
        } catch (err) {
          console.log('ERROR')
        }
        day = Number(day) - 1
        day = day.toString()
        if (day.length === 1) {
          day = '0' + day
        }
      }
      day = '30'
      month = Number(month) - 1
      month = month.toString()
      if (month.length === 1) {
        month = '0' + month
      }
    }
    year = Number(year) - 1
    year = year.toString()
  }
  return result
}

module.exports = {
  fetchSatellites,
  getEarth
}
