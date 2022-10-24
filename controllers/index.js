const Band = require('../models/band')
const Musician = require('../models/musician')

const createMusician = async (req, res) => {
  console.log(req.body)
  try {
    const musician = await new Musician(req.body)
    await musician.save()
    return res.status(201).json({
      musician
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllMusicians = async (req, res) => {
  try {
    const musicians = await Musician.find()
    return res.status(200).json({ musicians })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMusicianById = async (req, res) => {
  try {
    const { id } = req.params
    const musician = await Musician.findById(id)
    if (musician) {
      return res.status(200).json({ musician })
    }
    return res.status(404).send('This musician ID does not exist ')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createBand = async (req, res) => {
  try {
    const band = await new Band(req.body)
    await band.save()
    return res.status(201).json({
      band
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateBand = async (req, res) => {
  try {
    const band = await Band.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(band)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBand = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Band.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Band deleted')
    }
    throw new Error('Band does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createMusician,
  getAllMusicians,
  getMusicianById,
  createBand,
  updateBand,
  deleteBand
}
