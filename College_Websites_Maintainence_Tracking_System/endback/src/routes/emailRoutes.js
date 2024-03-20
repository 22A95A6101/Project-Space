const express =require('express');
const sendEmail=require('../controllers/emailController.js');
const uploadFile = require('../controllers/emailController.js');
const Router = express.Router();
// Router.post('/send-email', uploadFile, sendEmail); 

Router.post('/send-email',sendEmail.uploadFile,sendEmail.sendEmail);
module.exports=Router;