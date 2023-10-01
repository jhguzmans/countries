const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const saveCountries = require("./src/handlers/saveCountries");

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      saveCountries();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
