const db = require('../db')
const Musician = require('../models/musician')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const musicians = [
    {
      name: 'Robert Plant',
      bandOrigin: 'Led Zeppelin',
      image: 'https://www.famousbirthdays.com/faces/plant-robert-image.jpg',
      role: 'Singer',
      rating: 9
    },

    {
      name: 'Jimmy Page',
      bandOrigin: 'Led Zeppelin',
      image: 'https://www.famousbirthdays.com/faces/page-jimmy-image.jpg',
      role: 'Guitarist',
      rating: 10
    },

    {
      name: 'John Paul Jones',
      bandOrigin: 'Led Zeppelin',
      image: 'https://www.famousbirthdays.com/faces/jones-john-image.jpg',
      role: 'Bassist',
      rating: 6
    },

    {
      name: 'John Bonham',
      bandOrigin: 'Led Zeppelin',
      image: 'https://www.famousbirthdays.com/faces/bonham-john-image.jpgexit',
      role: 'Drummer',
      rating: 10
    }
  ]
  await Musician.insertMany(musicians)
  console.log('we got some musicians')
}
const run = async () => {
  await main()
  db.close()
}

run()
