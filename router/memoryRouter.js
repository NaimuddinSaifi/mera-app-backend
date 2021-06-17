const express = require('express')
const controller = require('../controller/memoryController')
const router = express.Router()

router.post('/list-memory', controller.listMemory)
router.post('/add-memory', controller.addMemory)
router.post('/delete-memory/:memoryId', controller.deleteMemory)

module.exports = router