const c_getActivities = require("../controlers/c_getActivities");
const getActivities = async (req, res) => {
  try {
    const data = await c_getActivities();
    console.log("La data es: " + data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = getActivities;
