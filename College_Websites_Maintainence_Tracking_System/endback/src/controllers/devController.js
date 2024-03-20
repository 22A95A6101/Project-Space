const nodemailer = require('nodemailer');
const ResolvedIssue =require('../models/resolved');
const sendResolvedIssueEmail = async (req, res) => {
  const { coordinatorEmail, website, changeType, description } = req.body;
  const status = 'completed';
  if (!coordinatorEmail) {
    return res.status(400).json({ error: 'Recipient email address is required' });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ramkishorereddy500@gmail.com',
        pass: 'pplq duap azbl xcdx'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: 'ramkishorereddy500@gmail.com',
      to: coordinatorEmail, // Use the provided coordinator email
      subject: 'Issue Resolution Notification',
      html: `
        <p>Dear Coordinator,</p>
        <p>The issue regarding the ${website} website, with a change type of ${changeType}, has been resolved successfully.</p>
        <p>Description of Change:</p>
        <p>${description}</p>
        <p>Status: ${status}</p>
        <p>Best Regards,<br/>Your Developer</p>
      `
    };

    await transporter.sendMail(mailOptions);
    const emailData = new ResolvedIssue({
        coordinatorEmail, website, changeType, description
      })

      await emailData.save();
    // Save resolved issue to the database
   /* await ResolvedIssue.create({
      website,
      changeType,
      description,
      resolvedBy: 'Developer', // You can customize this as needed
      status 
    });*/
    res.status(200).json({ message: 'Email sent successfully', data: 'saved successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending email' });
  }
};
module.exports={sendResolvedIssueEmail};