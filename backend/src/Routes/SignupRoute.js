const express = require('express');
const router = express.Router();
const signupController = require('../Controllers/SignupController')

router.post('/', signupController.signup);

module.exports = router