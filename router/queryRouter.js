const express = require('express')
const queryController = require('../controller/queryController')
const router = express.Router()

router.post('/add-query', queryController.addQuery)
router.post('/delete-query/:queryId', queryController.deleteQuery)

module.exports = router