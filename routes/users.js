let express = require('express');
let router = express.Router();
let UsersController = require('../controllers/usersController');

router.get('/users', (...args) => UsersController.getUsers(...args));
router.post('/user', (...args) => UsersController.createUser(...args));
router.put('/user', (...args) => UsersController.updateUser(...args));
router.delete('/user', (...args) => UsersController.destroyUser(...args));

module.exports = router;