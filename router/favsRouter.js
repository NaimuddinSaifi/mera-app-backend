const express = require('express')
const controller = require('../controller/favsController')
const router = express.Router()

router.post('/list-favs', controller.listFavs)
router.post('/add-fav', controller.addFav)
router.post('/delete-fav/:favId', controller.deleteFav)

module.exports = router