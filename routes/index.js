const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.post('/new', controllers.createMusician)

router.get('/list', controllers.getAllMusicians)

router.post('/newband', controllers.createBand)

router.put('/newband/:id', controllers.updateBand)

router.delete('/newband/:id', controllers.deleteBand)

router.get('/newband', controllers.getBand)

router.get('/:id', controllers.getMusicianById)

module.exports = router
