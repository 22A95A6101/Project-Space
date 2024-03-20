const express = require('express');
const Router = express.Router();

const loginController = require('../controllers/loginController')

//User Routes

Router.post('/login',loginController);

module.exports = Router;
