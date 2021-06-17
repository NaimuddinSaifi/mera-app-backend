const express = require('express')
const controller = require('../controller/todosController')
const router = express.Router()

router.post('/list-todos', controller.listTodos)
router.post('/add-todo', controller.addTodo)
router.post('/delete-todo/:todoId', controller.deleteTodo)

module.exports = router