const usersHandler = require('../handlers/user.handlers');
const express = require('express');
const router = express.Router();

router.post('/', usersHandler.createUser);
router.get('/', usersHandler.getAllUsers);
router.get('/:userId', usersHandler.getUserById);
router.put('/:userId', usersHandler.updateUserById);

module.exports = router;
