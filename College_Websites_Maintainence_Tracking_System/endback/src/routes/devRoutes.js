const express = require('express');
const sendResolvedIssueEmail= require('../controllers/devController')
const Router = express.Router();

// Route to handle sending resolved issue email
Router.post('/sendresolvedmail', sendResolvedIssueEmail.sendResolvedIssueEmail);

module.exports=Router;