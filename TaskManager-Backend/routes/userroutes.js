const express = require('express');
const router=express.Router();
const user = require('../controllers/usercontroller');

router.post('/',user.loginController);

router.post('/register',user.registerUser);

module.exports = router;