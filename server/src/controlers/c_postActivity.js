const { Activity } = require("../db");
const c_postActivity = async (name, dificult, duration, season) => {
  const newActivity = {
    name,
    dificult,
    duration,
    season,
  };
  const createdActivity = await Activity.create(newActivity);
  console.log(createdActivity);
  console.log(createdActivity.proto);
  return createdActivity;
};
module.exports = c_postActivity;
