const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

router.post('/task', protect, createTask);
router.get('/tasks', protect, getTasks);
router.put('/task/:id', protect, updateTask);
router.delete('/task/:id', protect, deleteTask);

module.exports = router;