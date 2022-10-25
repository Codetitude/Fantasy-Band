const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Band = new Schema(
  {
    name: { type: String, required: true },

    members: [{ type: Schema.Types.ObjectId, ref: 'Musician', required: true }],
    totalRating: { type: Number }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Band', Band)
