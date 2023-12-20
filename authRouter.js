const { Router } = require('express');
const authController = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware.js');
const roleMiddleware = require('./middleware/roleMiddleware.js');
const authRouter = new Router();

authRouter.post(
  '/registration',
  [
    //validator are checking that username not empty
    check('username', 'name must be longer').notEmpty(),
    //validator are checking that password have between 4 and 10 characters
    check('password', 'password must be longer').isLength({ min: 4, max: 10 }),
  ],
  authController.registration
);
authRouter.post('/login', authController.login);
authRouter.get('/users', roleMiddleware(['USER']), authController.getUser);

module.exports = authRouter;
