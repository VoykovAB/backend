const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usersController');

router.get('/users', (...args) => UsersController.getList(...args));
router.post('/users', (...args) => UsersController.create(...args));
router.put('/users/:id', (...args) => UsersController.update(...args));
router.delete('/users/:id', (...args) => UsersController.remove(...args));

module.exports = router;