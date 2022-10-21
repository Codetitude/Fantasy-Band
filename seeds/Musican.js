const db = require('../db')
const Musican = require('../models/musican')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const musicans = [
    {
      name: 'Robert Plant',
      bandOrigin: 'Led Zeppelin',
      image: '',
      role: 'Singer',
      rating: 9
    },

    {
      name: 'Jimmy Page',
      bandOrigin: 'Led Zeppelin',
      image: '',
      role: 'Guitarist',
      rating: 10
    },

    {
      name: 'John Paul Jones',
      bandOrigin: 'Led Zeppelin',
      image: '',
      role: 'Bassist',
      rating: 6
    },

    {
      name: 'John Bonham',
      bandOrigin: 'Led Zeppelin',
      image: '',
      role: 'Drummer',
      rating: 10
    }
  ]
  await Musican.insertMany(musicans)
  console.log('we got some musicans')
}
const run = async () => {
  await main()
  db.close()
}

run()
