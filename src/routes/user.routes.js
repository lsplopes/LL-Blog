const express = require('express');
const userMiddleware = require('../middlewares/validateUser.middleware');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

// public route
router.post('/', userMiddleware.validateUser, userController.createUser);

// private routes
router.use(authMiddleware.validateToken);

router.get('/:id', userController.getUserById);

router.get('/', userController.getUsers);

module.exports = router;
