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

const getUsers = (_req, res) => {
  try {
    const usersList = userService.getUsers();

    return res.send(usersList);
  } catch (error) {
    handleRequestError(error, res);
  }
};

// TEST 3: create a user
const postUser = (req, res) => {
  try {
    const { name, job } = req.body;

    const userCreated = userService.createUser({ name, job });

    return res.status(201).send(userCreated);
  } catch (error) {
    handleRequestError(error, res);
  }
};

// TEST 4: delete a user
const deleteUser = (req, res) => {
  try {
    const { name } = req.query;

    userService.deleteUser(name);

    return res
      .status(200)
      .send({ message: `User '${name}' deleted with success` });
  } catch (error) {
    handleRequestError(error, res);
  }
};

module.exports = { getUser, getUsers, postUser, deleteUser };
