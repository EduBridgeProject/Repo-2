const express = require("express");
const router = express.Router();
const {
  getUsersExcludingAdmin,
  updateUserStatus,
  getUserCount,
  createUser,
  loginUser, 
  logoutUser
} = require("../controllers/UserController");
const {authenticateUser} = require("../middleware/authMiddleware");

router.get("/users/exclude-admin", getUsersExcludingAdmin);
router.put("/users/update-status", updateUserStatus);
router.get("/users/count", getUserCount);
router.post("/users", createUser); // ⬅️ إضافة مسار لإنشاء مستخدم

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// مسار محمي لا يمكن الوصول إليه إلا بعد تسجيل الدخول
router.get("/profile", authenticateUser, (req, res) => {
  res.json({ message: "Welcome to your profile", user: req.user });
});

module.exports = router;