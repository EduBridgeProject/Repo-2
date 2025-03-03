// const { Donation, Donor } = require("../models");
// const bcrypt = require("bcrypt");



// const getUserDonations = async (req, res) => {
//   try {
//     // استخراج معرف المستخدم من المعاملات في الرابط
//     const userId = req.params.id;

//     if (!userId) {
//       return res.status(400).json({ error: "User ID is required" });
//     }

//     // استرجاع التبرعات الخاصة بالمستخدم
//     const donations = await Donations.findAll({
//       where: { donorId: userId },
//       order: [['donationDate', 'DESC']], // ترتيب حسب أحدث تاريخ
//     });

//     res.status(200).json({
//       userDonations: donations,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };



// const getUserTotalDonations = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const total = await Donation.sum("amount", {
//       where: { donorId: userId },
//     });

//     res.status(200).json({
//       userTotalDonations: total || 0, // يرجع 0 إذا لم يكن هناك تبرعات
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "An error occurred while retrieving total user donations." });
//   }
// };


// const getUserAverageDonation = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     // حساب إجمالي التبرعات
//     const totalDonations = await Donation.sum("amount", {
//       where: { donorId: userId },
//     });

//     // حساب عدد التبرعات التي قام بها المستخدم
//     const donationCount = await Donation.count({
//       where: { donorId: userId },
//     });

//     // حساب المتوسط
//     const averageDonation = donationCount > 0 ? (totalDonations / donationCount) : 0;

//     res.status(200).json({
//       userAverageDonation: averageDonation.toFixed(2), // تحديد رقم عشريين فقط
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "An error occurred while calculating average donation." });
//   }
// };



// const updateDonor = async (req, res) => {
//   try {
//     const donorId = req.user.id; // معرف المتبرع الحالي (المسجل دخولًا)
//     const { name, email, password } = req.body; // البيانات الجديدة التي سيتم تحديثها

//     // البحث عن المستخدم الحالي في قاعدة البيانات
//     const donor = await User.findByPk(donorId);
//     if (!donor) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // تحديث البيانات
//     donor.name = name || donor.name;
//     donor.email = email || donor.email;
    
//     if (password) {
//       const salt = await bcrypt.genSalt(10);
//       donor.password = await bcrypt.hash(password, salt); // تشفير كلمة المرور قبل الحفظ
//     }

//     await donor.save(); // حفظ التعديلات في قاعدة البيانات

//     res.status(200).json({ message: "Profile updated successfully." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "An error occurred while updating profile." });
//   }
// };








// module.exports = { getUserDonations  , getUserTotalDonations ,getUserAverageDonation ,updateDonor };
const { Donation, Donor, User } = require("../models");
const bcrypt = require("bcrypt");

const getUserDonations = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // استخدام موديل Donation الصحيح
    const donations = await Donation.findAll({
      where: { donorId: userId },
      order: [['donationDate', 'DESC']],
    });

    res.status(200).json({ userDonations: donations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserTotalDonations = async (req, res) => {
  try {
    const userId = req.params.id; // استخدام المعرف من الرابط
    const total = await Donation.sum("amount", {
      where: { donorId: userId },
    });
    res.status(200).json({ userTotalDonations: total || 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while retrieving total user donations." });
  }
};

const getUserAverageDonation = async (req, res) => {
  try {
    const userId = req.params.id; // استخدام المعرف من الرابط
    const totalDonations = await Donation.sum("amount", { where: { donorId: userId } });
    const donationCount = await Donation.count({ where: { donorId: userId } });
    const averageDonation = donationCount > 0 ? (totalDonations / donationCount) : 0;
    res.status(200).json({ userAverageDonation: averageDonation.toFixed(2) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while calculating average donation." });
  }
};

// جلب بيانات الملف الشخصي للمتبرع (من جدول Users)
const getDonorProfile = async (req, res) => {
  try {
    const donorId = req.params.id; // يُفترض أن يكون معرف المستخدم
    const user = await User.findByPk(donorId, {
      attributes: ["firstName", "email","password"],
    });
    if (!user) return res.status(404).json({ message: "Donor profile not found." });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching donor profile." });
  }
};

// تحديث بيانات الملف الشخصي للمتبرع (تحديث بيانات المستخدم في جدول Users)
const updateDonor = async (req, res) => {
  try {
    const donorId = req.params.id || req.user.id; // استخدم المعرف من الرابط أو من req.user (حسب نظام المصادقة)
    const { name, email, password } = req.body;

    const user = await User.findByPk(donorId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    // تحديث البيانات؛ نفترض أن الحقل name يُستخدم لتحديث firstName
    user.firstName = name || user.firstName;
    user.email = email || user.email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    await user.save();
    res.status(200).json({ message: "Profile updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating profile." });
  }
};
module.exports = { getUserDonations, getUserTotalDonations, getUserAverageDonation, getDonorProfile ,updateDonor };
