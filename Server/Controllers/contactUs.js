const Contact = require("../Model/contactModel");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

const contactusController = async (req, res) => {
  try {
    const { fullname, email, subject, message } = req.body.formData;

    const contact = await new Contact({
      fullname,
      email,
      subject,
      message,
    });
    const contactMail = {
      from: process.env.AUTH_EMAIL,
      to: process.env.AUTH_EMAIL,
      subject: "Contact Query",
      html: `
          <html>
    <style>
        li{
            margin-bottom: .5rem;
        }
    </style>
    <body style="font-family: sans-serif; font-size: 1.2rem; letter-spacing: .4px; ">
    
        <div style="position: relative; width: 80%; margin: 10px auto; color: rgb(0, 0, 0); background-color: #ffffff; padding: .1rem 2rem; padding-bottom: 2rem;">
           
            <p style="font-size: 1.8rem; font-weight: 600;">Contact Query</p>
           
            <p><b>Here are the details of contact :</b></p>
            <ul>
            <li>User Name: ${fullname}</li>
            <li>Email: ${email}</li>
            <li>Subject: ${subject}</li>
            <li>Message: ${message}</li>
            </ul>
    
        </div>
    </body>
    
    </html>
          `,
    };
    await transporter.sendMail(contactMail);

    await contact.save();
    return res.status(200).send({
      success: true,
      message: "Message sent",
    });
  } catch (error) {
    return res.status(200).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { contactusController };
