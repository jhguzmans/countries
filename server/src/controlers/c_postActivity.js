const { Activity, Country } = require("../db");
const c_postActivity = async (
  name,
  dificult,
  duration,
  season,
  countriesName
) => {
  try {
    const newActivity = {
      name,
      dificult,
      duration,
      season,
    };
    const createdActivity = await Activity.create(newActivity);

    if (countriesName && countriesName.length > 0) {
      const createdCountries = await Promise.all(
        countriesName.map(async (countryName) => {
          const existingCountry = await Country.findOne({
            where: {
              name: countryName,
            },
          });
          if (existingCountry) {
            return existingCountry;
          } else {
            console.log(
              `El país ${countryName} no existe en la base de datos.`
            );
          }
        })
      );
      await createdActivity.addCountries(createdCountries);
    }
    const countries = await createdActivity.getCountries();
    console.log(createdActivity);
    createdActivity.dataValues.countries = countries;
    return createdActivity;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = c_postActivity;
