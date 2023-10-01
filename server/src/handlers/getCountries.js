const c_getCountries = require("../controlers/c_getCountries");
const getCountries = async (req, res) => {
  try {
    const { name } = req.query;
    console.log("El pais buscado es: " + name);
    const data = await c_getCountries(name);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = getCountries;
