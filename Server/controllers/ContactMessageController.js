const { ContactMessage } = require("../models");
require("dotenv").config();

// جلب جميع الرسائل
const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.findAll();

    if (!messages.length) {
      return res.status(404).json({ message: "No contact messages found" });
    }

    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// إرسال رسالة جديدة
const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // التحقق من أن جميع البيانات موجودة
    if (!name || !email || !message) {
      return res.status(400).json({ error: "يرجى ملء جميع الحقول" });
    }

    // حفظ البيانات في قاعدة البيانات
    const newMessage = await ContactMessage.create({ name, email, message });

    return res.status(201).json({ message: "تم إرسال الرسالة بنجاح", data: newMessage });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ error: "حدث خطأ أثناء الإرسال" });
  }
};

module.exports = {
  getAllMessages,
  sendMessage,
};
