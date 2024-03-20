// const nodemailer= require('nodemailer');
// const multer= require('multer');
// // Configure multer for file uploads
// const storage = multer.memoryStorage(); // Store file in memory

// const Email = require('../models/email.js')

// // Controller function to handle sending email
// const sendEmail = async (req, res) => {
//   const { name, email, website, changeType, description } = req.body;
//   const attachment = req.file; // Get file attachment from request


//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads/') // specify the destination folder where files will be saved
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname) // use the original filename
//     }
//   });
//   const upload = multer({ storage: storage });


//   // Validate recipient email address
//   if (!email) {
//     return res.status(400).json({ error: 'Recipient email address is required' });
//   }

//   try {
//     // Create transporter using SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'ramkishorereddy500@gmail.com', // Your email
//         pass: 'pplq duap azbl xcdx' // Your password
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
//     });

//     // Email options
//     let mailOptions = {
//       from: 'ramkishorereddy500@gmail.com', // Your email
//       to: email, // Recipient's email
//       subject: 'Change Request', // Subject line
//       html: `
//         <p><strong>Coordinator's Name:</strong> ${name}</p>
//         <p><strong>Coordinator's Email:</strong> ${email}</p>
//         <p><strong>Website Name:</strong> ${website}</p>
//         <p><strong>Type of Change:</strong> ${changeType}</p>
//         <p><strong>Description of Change:</strong> ${description}</p>
//       `,
//       attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
//     };

//     // Send mail with defined transport object
//     await transporter.sendMail(mailOptions);



//     const emailData = new Email({
//       name, email, website, changeType, description
//     })

//     await emailData.save();

//     res.status(200).json({ message: 'Email sent successfully',data:'saved succesfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'An error occurred while sending email' });
//   }
// };

// // Middleware to handle file upload
// const uploadFile = upload.single('attachment');
// module.exports={sendEmail, uploadFile};

const nodemailer = require('nodemailer');
const multer = require('multer');
const Email = require('../models/email.js');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/') // specify the destination folder where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // use the original filename
  }
});
const upload = multer({ storage: storage });

// Controller function to handle sending email
const sendEmail = async (req, res) => {
  const { name, email, website, changeType, description } = req.body;
  const attachment = req.file; // Get file attachment from request

  // Validate recipient email address
  if (!email) {
    return res.status(400).json({ error: 'Recipient email address is required' });
  }

  try {
    // Create transporter using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ramkishorereddy500@gmail.com', // Your email
        pass: 'pplq duap azbl xcdx' // Your password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email options
    let mailOptions = {
      from: 'ramkishorereddy500@gmail.com', // Your email
      to: email, // Recipient's email
      subject: 'Change Request', // Subject line
      html: `
        <p><strong>Coordinator's Name:</strong> ${name}</p>
        <p><strong>Coordinator's Email:</strong> ${email}</p>
        <p><strong>Website Name:</strong> ${website}</p>
        <p><strong>Type of Change:</strong> ${changeType}</p>
        <p><strong>Description of Change:</strong> ${description}</p>
      `,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : []
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    const emailData = new Email({
      name, email, website, changeType, description
    })

    await emailData.save();

    res.status(200).json({ message: 'Email sent successfully', data: 'saved successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending email' });
  }
};

// Middleware to handle file upload
const uploadFile = upload.single('attachment');
module.exports = { sendEmail, uploadFile };
