require("dotenv").config();
const { inicializeDB } = require("./db");

const app = require("./app");

inicializeDB();

const PORT = +process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`);
});
