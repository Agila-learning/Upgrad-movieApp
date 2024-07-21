const express = require('express');
const router = express.Router();
const { login, signup, logout } = require('../controllers/user.controller');

router.post('/auth/login', login);
router.post('/auth/signup', signup);
router.post('/auth/logout', logout);

module.exports = router;
