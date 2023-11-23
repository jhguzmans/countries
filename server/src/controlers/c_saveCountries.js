const URL = "http://localhost:5000/countries";
const axios = require("axios");
const { Country } = require("../db");
const Sequelize = require("sequelize");

const c_saveCountries = async () => {
  const { data } = await axios(URL);
  if (!data) throw new Error("Error al guardar los datos en la DB");
  let n = 0;
  for (const entidad of data) {
    n++;
    entidad.id = entidad.cca3;
    entidad.name = entidad.translations.spa.common;
    entidad.flag = entidad.flags.svg;
    if (entidad.subregion == undefined) {
      entidad.subregion = "Subregion no data";
    }
    if (!entidad.capital) {
      entidad.capital = "Capital no data";
    }
    entidad.capital = entidad.capital[0];
    await Country.create(entidad); // Crea una instancia del modelo y la guarda en la base de datoss
  }
  console.log(n + " paises guardados correctamente.");
  return "Paises guardados correctamente.";
};
module.exports = c_saveCountries;
