const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route 
router.get('/', function (req, res) {
  res.send('home page')
})
// define the about route
router.get('/login', userController.login)

module.exports = router