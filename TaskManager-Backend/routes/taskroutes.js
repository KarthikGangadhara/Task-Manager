const express = require('express');
const router=express.Router();
const task = require('../controllers/taskcontroller');

router.post('/',task.createTask);

router.get('/',task.getTasks);

router.put('/',task.updateTask);

module.exports = router;