const express = require('express')
const notesController = require('../controller/notesController')
const router = express.Router()

router.post('/add-note', notesController.addNotes)
router.post('/delete-note/:noteId', notesController.deleteNotes)

module.exports = router