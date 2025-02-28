const { User, Sequelize } = require("../models");
const nodemailer = require("nodemailer");

require("dotenv").config();

const getUsersExcludingAdmin = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role: {
          [Sequelize.Op.ne]: "admin",
        },
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateUserStatus = async (req, res) => {
  const { userId, status } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validStatuses = ["pending", "approved", "inactive"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    user.status = status;
    await user.save();

    await sendStatusUpdateEmail(user.email, status);

    return res.status(200).json({
      message: `User status updated to ${status} and email sent.`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const sendStatusUpdateEmail = async (userEmail, status) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Account Status Update",
    text: `Dear user,\n\nYour account status has been updated to: ${status}.\n\nThank you for being with us.`, // Email body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Status update email sent.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const getUserCount = async (req, res) => {
  try {
    const userCount = await User.count({
      where: {
        role: {
          [Sequelize.Op.ne]: "admin",
        },
      },
    });

    return res.status(200).json({ count: userCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getUsersExcludingAdmin,
  updateUserStatus,
  getUserCount,
};
