const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/ToDoController')

router.post('/create', todoController.CreateTodo)
router.post('/get',todoController.getUserTodos)

module.exports = router