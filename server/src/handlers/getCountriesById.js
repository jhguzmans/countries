const c_getCountryById = require("../controlers/c_getCountryById");
const getCountriesById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("El ID es: " + id);
    const data = await c_getCountryById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
module.exports = getCountriesById;
