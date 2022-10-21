const mongoose = require('mongoose')
const MusicanSchema = require('./musican')
const BandIsFormedSchema = require('./bandIsFormed')

const Musican = mongoose.model('Musican', MusicanSchema)

const BandIsFormed = mongoose.model('BandIsFormed', BandIsFormedSchema)

module.exports = {
  Musican,
  BandIsFormed
}
