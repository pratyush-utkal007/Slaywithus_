const { hashPassword, comparePassword } = require("../Helpers/authHelpers");
const User = require("../Model/userModel");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

//generate otp
function generateRandomNumber(length) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generatedOTP = generateRandomNumber(6);
const otpString = generatedOTP.toString();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

//all routes
const test = async (req, res) => {
  res.send("hello routes");
};

// register
const registerController = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      state,
      password,
      cpassword,
      dateOfBirth,
      occupation,
      garmentsColor,
      bodyBuilt,
      complexion,
      socialLink,
      favoriteCloset,
      message,
    } = req.body;

    // check user
    const exisitingUser = await User.findOne({ email });
    // exisiting User
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Email already exists",
      });
    }
    // password encrypt
    const hashedPassword = await hashPassword(password);

    const countryValue = country.label;
    const stateValue = state.label;
    // register user
    const user = await new User({
      firstName,
      lastName,
      email,
      phone,
      country: countryValue,
      state: stateValue,
      password: hashedPassword,
      cpassword: hashedPassword,
      dateOfBirth,
      occupation,
      garmentsColor,
      bodyBuilt,
      complexion,
      socialLink,
      favoriteCloset,
      message,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error: error.message,
    });
  }
};

// login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // check user email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not register",
      });
    }

    // check user password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid  Password",
      });
    }

    //   create token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "365d",
    });

    res.status(200).send({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//otp-sent
const otpController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(200).send({
        success: false,
        message: "Email is required",
      });
    }
    const regdUser = await User.findOne({ email });
    if (!regdUser) {
      return res.status(200).send({
        success: false,
        message: "Email doesn't exists",
      });
    }

    const sendOtp = {
      from: process.env.AUTH_EMAIL,
      to: `${email}`,
      subject: "Reset Password",
      text: `
          Your Recovery OTP is : ${generatedOTP}
      `,
    };
    await transporter.sendMail(sendOtp);
    return res.status(200).send({
      success: true,
      message: "Opt Sent to your registered email",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

//forgot-password
const ResetPasswordController = async (req, res) => {
  try {
    const { email, otp, password } = req.body;
    const user = await User.findOne({ email });
    if (!otp) {
      return res.status(200).send({
        success: true,
        message: "OTP is required",
      });
    }
    const hashedPassword = await hashPassword(password);
    if (otpString === otp) {
      await User.findByIdAndUpdate(
        user._id,
        { password: hashedPassword },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Password successfully updated",
      });
    }
    nav;
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

// exports all controller
module.exports = {
  registerController,
  loginController,
  otpController,
  ResetPasswordController,
  test,
};
