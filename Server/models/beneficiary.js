"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Beneficiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsToMany(models.Program, {
        through: "BeneficiaryPrograms",
        foreignKey: "beneficiaryId",
      });
    }
  }
  Beneficiary.init(
    {
      userId: DataTypes.INTEGER,
      eligibilityStatus: DataTypes.STRING,
      needsDescription: DataTypes.TEXT,
      approvedByAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Beneficiary",
    }
  );
  return Beneficiary;
};
