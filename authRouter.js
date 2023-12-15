const { Router } = require('express');
const authController = require('./authController');

const authRouter = new Router();

authRouter.post('/registration', authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/users', authController.getUser);

module.exports = authRouter;
