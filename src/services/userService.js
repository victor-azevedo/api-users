const userRepository = require("../repositories/userRepository");
const AppError = require("../errors/AppError");
const notFoundError = require("../errors/notFoundError");

// TEST 1: get a user
const getUser = (name) => {
  validateUserQueryName(name);

  const userFound = userRepository.getUserByName(name, true);

  if (!userFound) notFoundError();

  return userFound;
};

// TEST 1: get users
const getUsers = () => {
  const usersList = userRepository.getUsers();

  return usersList;
};

// TEST 2: create a user
const createUser = ({ name, job }) => {
  validateUserBody({ name, job });

  const userCreated = userRepository.createUser({ name, job });

  if (!userCreated)
    throw new AppError("'name' já cadastrado por outro usuário", 409);

  return userCreated;
};

// TEST 3: delete a user
const deleteUser = (name) => {
  validateUserQueryName(name);

  const userFound = userRepository.getUserByName(name);
  if (!userFound) notFoundError();

  const isUserDeleted = userRepository.deleteUser(name);
  if (!isUserDeleted) notFoundError();

  return;
};

// TEST 4: update a user
const updateUser = ({ id, name, job }) => {
  validateUserQueryId(id);
  validateUserBody({ name, job });

  const userFound = userRepository.getUserById(id);
  if (!userFound) notFoundError();

  const userSameNameFound = userRepository.getUserByName(name);
  if (userSameNameFound && userSameNameFound.id !== id)
    throw new AppError("'name' já cadastrado por outro usuário", 409);

  const userUpdated = userRepository.updateUser({ id, name, job });

  return userUpdated;
};

// TEST 5: update a user
const userAccess = (name) => {
  validateUserQueryName(name);

  const userAccessCount = userRepository.userAccess(name);

  if (userAccessCount < 0) notFoundError();

  return userAccessCount;
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  userAccess,
};

// LOCAL FUNCTIONS:

const validateUserBody = ({ name, job }) => {
  if (!name || !job)
    throw new AppError("Requer 'body' com campos: {name, job}", 422);
};

const validateUserQueryName = (name) => {
  if (!name) throw new AppError("Requer 'query' com campos: 'name'", 400);
};

const validateUserQueryId = (id) => {
  if (!id)
    throw new AppError(
      "Requer 'query' com campo: 'id' que tem ser um número",
      422
    );
};
