const express = require('express');
const { route } = require('express/lib/application');
const userModel = require('../models/userMode.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



router.post('/createUser', userController.createUser)
router.get('/getUserData, useController.getUserData')

module.exports = router;
// adding this comment for no reason