const express = require('express');
const userCtrl = require('../controllers/users');
const { checkToken } = require('../middleware/auth');

const userRouter = express.Router();

userRouter.post('/add', userCtrl.registerUser);
userRouter.post('/login', userCtrl.loginUser);
userRouter.put('/update/:id', checkToken, userCtrl.updateUserProfile);

module.exports = userRouter;
