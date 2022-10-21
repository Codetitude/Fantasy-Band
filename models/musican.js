const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Musican = new Schema(
  {
    name: { type: String, required: true },
    bandOrigin: { type: String, required: true },
    image: { type: String, required: true },
    role: { type: String, required: true },
    rating: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Musican', Musican)
