const c_postActivity = require("../controlers/c_postActivity");
const axios = require("axios");
const postActivities = async (req, res) => {
  try {
    const { name, dificult, duration, season, countriesName } = req.body;
    console.log("los datos que se envían en el handler son:");
    console.log(countriesName);
    const createdActivity = await c_postActivity(
      name,
      dificult,
      duration,
      season,
      countriesName
    );
    return res.status(200).json(createdActivity);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postActivities;
