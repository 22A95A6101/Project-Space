//import express from 'express';
const express = require ('express');
//import { sendEmailToDev, fetchDevelopers, uploadFile } from '../controllers/emailController.js';
const sendEmailToDev= require('../controllers/leadmailController');
const Router = express.Router();

// Route to handle sending email to developers
Router.post('/send-email-to-dev', sendEmailToDev.uploadFile, sendEmailToDev.sendEmailToDev);

// Route to fetch list of developers
Router.get('/developers', sendEmailToDev.fetchDevelopers);
module.exports= Router;