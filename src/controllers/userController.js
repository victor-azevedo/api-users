const userService = require("../services/userService");
const handleRequestError = require("../errors/handleRequestError");

// TEST 1: get a user
const getUser = (req, res) => {
  try {
    const { name } = req.query;

    const user = userService.getUser(name);

    return res.send(user);
  } catch (error) {
    handleRequestError(error, res);
  }
};

// TEST 1: get users
const getUsers = (_req, res) => {
  try {
    const usersList = userService.getUsers();

    return res.send(usersList);
  } catch (error) {
    handleRequestError(error, res);
  }
};

// TEST 2: create a user
const postUser = (req, res) => {
  try {
    const { name, job } = req.body;

    const userCreated = userService.createUser({ name, job });

    return res.status(201).send(userCreated);
  } catch (error) {
    handleRequestError(error, res);
  }
};

// TEST 3: delete a user
const deleteUser = (req, res) => {
  try {
    const { name } = req.query;

    userService.deleteUser(name);

    return res
      .status(200)
      .send({ message: `Usuário '${name}' deletado com sucesso` });
  } catch (error) {
    handleRequestError(error, res);
  }
};

// TEST 4: update a user
const updateUser = (req, res) => {
  try {
    const { id } = req.query;
    const { name, job } = req.body;

    const userUpdated = userService.updateUser({ id: parseInt(id), name, job });

    return res.send(userUpdated);
  } catch (error) {
    handleRequestError(error, res);
  }
};

// TEST 5: update a user
const userAccess = (req, res) => {
  try {
    const { name } = req.query;

    const userAccessCount = userService.userAccess(name);

    return res.send({
      message: `Usuário ${name} foi lido ${userAccessCount} vezes.`,
    });
  } catch (error) {
    handleRequestError(error, res);
  }
};

module.exports = {
  getUser,
  getUsers,
  postUser,
  deleteUser,
  updateUser,
  userAccess,
};
