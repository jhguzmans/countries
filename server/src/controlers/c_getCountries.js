require("dotenv").config();
const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

const c_getCountries = async (name) => {
  let dataDB = [];
  if (name) {
    dataDB = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [Activity],
    });
    if (dataDB.length == 0)
      throw Error("No existe ningun pais con ese nombre.");
    return dataDB[0];
  } else {
    dataDB = await Country.findAll({ include: [Activity] });
    return dataDB;
  }
};
module.exports = c_getCountries;
