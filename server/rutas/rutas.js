const express = require('express');
const router = express.Router();

const { postLogin, authenticateToken } = require('../controladores/loginController');

router.post('/login', postLogin)

module.exports = router;