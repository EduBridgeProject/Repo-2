module.exports = (sequelize, DataTypes) => {
  const ContactMessage = sequelize.define('ContactMessage', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return ContactMessage;
};




// "use strict";

// const { Model } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//   class ContactMessage extends Model {
//     static associate(models) {
//       // ربط كل ContactMessage بالمستخدم الذي أرسلها
//       ContactMessage.belongsTo(models.User, {
//         foreignKey: "userId",
//         as: "user", // اسم العلاقة
//       });
//     }
//   }

//   ContactMessage.init(
//     {
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       message: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "ContactMessage",
//     }
//   );

//   return ContactMessage;
// };
