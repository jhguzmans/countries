const { Router } = require("express");

const getCountries = require("../handlers/getCountries");
const getCountriesById = require("../handlers/getCountriesById");
//const getCountriesByName = require("../handlers/getCountriesByName");
const postActivities = require("../handlers/postActivities");
const saveCountries = require("../handlers/saveCountries");
const getActivities = require("../handlers/getActivities");
const deleteActivity = require("../handlers/deleteActivity");

const router = Router();

router.get("/countries", getCountries);
router.get("/countries/:id", getCountriesById);
//router.get("/countries/name?", getCountriesByName);
router.post("/activities", postActivities);
router.get("/activities", getActivities);
router.get("/save", saveCountries);
router.delete("/activity/:id", deleteActivity);
module.exports = router;
