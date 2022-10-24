const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/new', controllers.createMusician)

router.get('/list', controllers.getAllMusicians)

router.get('/:id', controllers.getMusicianById)

router.post('/newband', controllers.createBand)

router.put('/newband/:id', controllers.updateBand)

router.delete('/newband/:id', controllers.deleteBand)

module.exports = router
