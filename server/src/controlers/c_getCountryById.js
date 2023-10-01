require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db.js");

const c_getCountryById = async (id) => {
  console.log(id);
  if (id.length !== 3)
    throw Error("El identicador del país debe tener 3 letras.");

  const dataDB = await Country.findAll({
    where: {
      id: {
        [Op.iLike]: `%${id}%`,
      },
    },
    include: [Activity],
  });
  if (dataDB.length == 0) throw Error("No existe ningun pais con ese ID.");
  return dataDB[0];
};
module.exports = c_getCountryById;
