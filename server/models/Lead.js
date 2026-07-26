const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Lead = sequelize.define("Lead", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

 email: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true,
},
  },

  budget: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM("New", "Contacted", "Closed"),
    defaultValue: "New",
  },
});

module.exports = Lead;