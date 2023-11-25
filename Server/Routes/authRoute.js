const express = require("express");
const {
  registerController,
  loginController,
  test,
  otpController,
  ResetPasswordController,
} = require("../Controllers/authController");

const router = express.Router();

// Register & method POST
router.post("/register", registerController);

// Login & method POST
router.post("/login", loginController);

//otp send
router.post("/otp-send", otpController);

//reset-password
router.post("/reset-password", ResetPasswordController);

router.get("/route", test);

module.exports = router;
