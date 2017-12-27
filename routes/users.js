const express = require('express');

const router = express.Router();

const userController = require('../controller/userControl');

router.get('/', userController.home);
router.get('/users', userController.listUsers);

router.post('/new-user', userController.register);

module.exports = router;