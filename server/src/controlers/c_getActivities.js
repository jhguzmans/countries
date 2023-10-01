const axios = require("axios");
const { Country, Activity } = require("../db.js");
const c_getActivities = async () => {
  const dataDB = await Activity.findAll();
  if (dataDB.length == 0) return "No hay actividades guardadas";
  return dataDB;
};
module.exports = c_getActivities;
