const mongoose = require('mongoose')
const MusicianSchema = require('./musician')
const BandSchema = require('./band')

const Musician = mongoose.model('Musician', MusicianSchema)

const Band = mongoose.model('Band', BandSchema)

module.exports = {
  Musician,
  Band
}
