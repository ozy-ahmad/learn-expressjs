const express = require("express");
const router = express.Router();
const Contact = require("../controllers/Contact");

router.post("/contact", Contact.create);
module.exports = router;
