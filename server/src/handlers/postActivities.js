const c_postActivity = require("../controlers/c_postActivity");
const axios = require("axios");
const postActivities = async (req, res) => {
  try {
    const { name, dificult, duration, season } = req.body;
    const createdActivity = await c_postActivity(
      name,
      dificult,
      duration,
      season
    );
    return res.status(200).json(createdActivity);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postActivities;
