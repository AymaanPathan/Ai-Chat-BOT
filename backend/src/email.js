const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    // 1. Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Define the email options
    const mailOptions = {
      from: "ai-bot-p <hello@ai-aymaan.io>",
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("There was an error sending the email");
  }
};

module.exports = sendEmail;
