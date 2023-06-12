const userService = require("../services/userService");
const handleRequestError = require("../errors/handleRequestError");

const getUser = (req, res) => {
  try {
    const { name } = req.query;

    const user = userService.getUser(name);

    return res.send(user);
  } catch (error) {
    handleRequestError(error, res);
  }
};

module.exports = { getUser };
