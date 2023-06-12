require("dotenv").config();

const app = require("./app");

const PORT = +process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`);
});
