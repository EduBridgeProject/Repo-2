const express = require("express");
const router = express.Router();
const { getAllMessages, sendMessage } = require("../controllers/ContactMessageController");



router.get("/contact-messages", getAllMessages);
router.post("/contact-messages", sendMessage);


module.exports = router;


