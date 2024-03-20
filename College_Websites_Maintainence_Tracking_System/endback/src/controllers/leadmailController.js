//import nodemailer from 'nodemailer';
const nodemailer=require('nodemailer');
//import multer from 'multer';
const multer =require('multer');
//import Developer from '../models/developerModel.js';
const Developer = require('../models/developerModel');
// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Controller function to handle sending email to developers
const sendEmailToDev = async (req, res) => {
  const { devName, devEmail, collegeName, issue, description } = req.body;
  const attachment = req.file;

  if (!devEmail) {
    return res.status(400).json({ error: 'Developer email address is required' });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ramkishorereddy500@gmail.com', // Your email
        pass: 'pplq duap azbl xcdx' // Your password
      }
    });

    let mailOptions = {
      from: 'ramkishorereddy500@gmail.com',
      to: devEmail,
      subject: 'Issue Report',
      html: `
        <p><strong>College Name:</strong> ${collegeName}</p>
        <p><strong>Developer Name:</strong> ${devName}</p>
        <p><strong>Issue:</strong> ${issue}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
    };

    await transporter.sendMail(mailOptions);

    await Developer.create({
      name: devName,
      email: devEmail
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending email' });
  }
};

// Middleware to handle file upload
const uploadFile = upload.single('attachment');

// Controller function to fetch list of developers
const fetchDevelopers = async (req, res) => {
  try {
    const developers = await Developer.find();
    res.status(200).json(developers);
  } catch (error) {
    console.error('Error fetching developers:', error);
    res.status(500).json({ error: 'An error occurred while fetching developers' });
  }
};

module.exports={sendEmailToDev,uploadFile,fetchDevelopers};