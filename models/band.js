const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Band = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    member: { type: String, required: true },
    totalRating: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Band', Band)
