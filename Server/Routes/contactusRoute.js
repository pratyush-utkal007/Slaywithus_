const express = require("express");
const { contactusController } = require("../Controllers/contactUs");

const router = express.Router();

router.post("/", contactusController);

module.exports = router;
