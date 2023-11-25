const Booking = require("../Model/bookingModel");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

const bookingController = async (req, res) => {
  const { serviceName, duration, price } = req.body.selectService;
  const date = req.body.selectDate;
  const { time } = req.body.selectDateTime;
  const { firstName, lastName, email, phone, country, state, note } =
    req.body.userBasicDetail;
  const {
    dateOfBirth,
    occupation,
    garmentsColor,
    bodyBuilt,
    complexion,
    socialLink,
    favoriteCloset,
    message,
  } = req.body.userPersionalData;

  //save data in database
  // Check if a document with the same email exists
  const existingBooking = await Booking.findOne({ email: email });

  if (existingBooking) {
    // Update all fields in the existing document
    existingBooking.serviceName = serviceName;
    existingBooking.date = date;
    existingBooking.time = time;
    existingBooking.firstName = firstName;
    existingBooking.lastName = lastName;
    existingBooking.phone = phone;
    existingBooking.country = country;
    existingBooking.state = state;
    existingBooking.note = note;
    existingBooking.dateOfBirth = dateOfBirth;
    existingBooking.occupation = occupation;
    existingBooking.garmentsColor = garmentsColor;
    existingBooking.bodyBuilt = bodyBuilt;
    existingBooking.complexion = complexion;
    existingBooking.socialLink = socialLink;
    existingBooking.favoriteCloset = favoriteCloset;
    existingBooking.message = message;

    // Save the updated document
    await existingBooking.save();
  } else {
    // Create a new Booking document if it doesn't exist
    const newBooking = new Booking({
      serviceName,
      date,
      time,
      firstName,
      lastName,
      email,
      phone,
      country,
      state,
      note,
      dateOfBirth,
      occupation,
      garmentsColor,
      bodyBuilt,
      complexion,
      socialLink,
      favoriteCloset,
      message,
    });

    await newBooking.save();
  }

  //send mail to owner
  const owner = {
    from: process.env.AUTH_EMAIL,
    to: process.env.AUTH_EMAIL,
    subject: "New Booking",
    html: `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 10px;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        ul {
            list-style-type: circle;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
            color: #555;
        }
        li strong {
            color: #333;
        }
        p {
            color: #444;
            margin-top: 20px;
        }
        p.signature {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>New Booking Arrive</h1>
    <ul>
        <li><strong>Service Name:</strong> ${serviceName}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Duration:</strong> ${duration}</li>
        <li><strong>Price:</strong> ${price}</li>
        <li><strong>First Name:</strong> ${firstName}</li>
        <li><strong>Last Name:</strong> ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>State:</strong> ${state}</li>
        <li><strong>Note:</strong> ${note}</li>
        <li><strong>Date of Birth:</strong> ${dateOfBirth}</li>
        <li><strong>Occupation:</strong> ${occupation}</li>
        <li><strong>Garments Color:</strong> ${garmentsColor}</li>
        <li><strong>Body Built:</strong> ${bodyBuilt}</li>
        <li><strong>Complexion:</strong> ${complexion}</li>
        <li><strong>Social Link:</strong> ${socialLink}</li>
        <li><strong>Favorite Closet:</strong> ${favoriteCloset}</li>
        <li><strong>Message:</strong> ${message}</li>
    </ul>
</body>
</html>`,
  };

  const client = {
    from: process.env.AUTH_EMAIL,
    to: `${email}`,
    subject: "Booking Confirmation",
    html: `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 10px;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        ul {
            list-style-type: circle;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
            color: #555;
        }
        li strong {
            color: #333;
        }
        p {
            color: #444;
            margin-top: 20px;
        }
        p.signature {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Booking Confirmation</h1>
    <h1>Dear ${firstName} ${lastName},</h1>
    <p>Thank you for booking our service. We have received your details and will confirm your booking shortly. If you have any questions or need further assistance, please don't hesitate to contact us.</p>
    <ul>
        <li><strong>Service Name:</strong> ${serviceName}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Duration:</strong> ${duration}</li>
    </ul>
    <p class="signature"><br/>Best regards,Slaywithus</p>
</body>
</html>`,
  };

  await transporter.sendMail(owner);
  await transporter.sendMail(client);

  res.status(201).send({
    success: true,
    message: "Appointment Booking Successfully",
  });

  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

module.exports = { bookingController };
