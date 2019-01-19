'use strict'

const db = require('../server/db')
const {User, Earth, Satellite} = require('../server/db/models')
const {getEarth, fetchSatellites} = require('./NASA_api')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const earth = await getEarth()
  const satellite = await fetchSatellites()
  console.log(satellite)
  for (const obj of earth) {
    try {
      await Earth.create(obj)
    } catch (err) {
      console.log('ERROR')
    }
  }
  for (const coordinates of satellite) {
    try {
      await Satellite.create(coordinates)
    } catch (err) {
      console.log(err)
    }
  }

  //console.log(`seeded ${earth.length} images`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
