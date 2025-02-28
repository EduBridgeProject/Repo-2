const express = require("express");
const router = express.Router();
const {
  getUsersExcludingAdmin,
  updateUserStatus,
  getUserCount,
} = require("../controllers/UserController");

router.get("/users/exclude-admin", getUsersExcludingAdmin);

router.put("/users/update-status", updateUserStatus);

router.get("/users/count", getUserCount);

module.exports = router;
