const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://myFantasyBand:1234@fantasy-band.uxq6m0x.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
