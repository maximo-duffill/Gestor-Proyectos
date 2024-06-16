const nodemailer = require('nodemailer');

// Create a nodemailer transporter using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Example using Gmail
  auth: {
    user: 'xxrayfoxx@gmail.com', // Your Gmail address
    pass: 'maximo123456', // Your Gmail password
  },
});

// Optionally, verify the configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to mail server:', error);
  } else {
    console.log('Mail server connection successful');
  }
});

module.exports = transporter;
