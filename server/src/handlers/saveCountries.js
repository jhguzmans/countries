const axios = require("axios");
const c_saveCountries = require("../controlers/c_saveCountries");

const saveCountries = async (req, res) => {
  try {
    const data = await c_saveCountries();
    return res.status(200).send(data);
  } catch (error) {
    //res.status(400).json({ error: error.message });
  }
};
module.exports = saveCountries;
