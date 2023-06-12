const userRepository = require("../repositories/userRepository");
const AppError = require("../errors/AppError");

// TEST 1:
const getUser = (name) => {
  validateUserQueryName(name);

  const userFound = userRepository.getUser(name);

  if (!userFound) throw new AppError("User not found", 404);

  return userFound;
};

const getUsers = () => {
  const usersList = userRepository.getUsers();

  return usersList;
};

// TEST 2: create a user
const createUser = ({ name, job }) => {
  validateUserBody({ name, job });

  const userCreated = userRepository.createUser({ name, job });

  return userCreated;
};

// TEST 3: delete a user
const deleteUser = (name) => {
  validateUserQueryName(name);

  const isUserDeleted = userRepository.deleteUser(name);
  if (!isUserDeleted) throw new AppError("User not found", 404);

  return;
};

// TEST 4: update a user
const updateUser = ({ id, name, job }) => {
  validateUserQueryId(id);
  validateUserBody({ name, job });

  const userUpdated = userRepository.updateUser({ id, name, job });

  if (!userUpdated) throw new AppError("User not found", 404);

  return userUpdated;
};

// TEST 5: update a user
const userAccess = (name) => {
  validateUserQueryName(name);

  const userAccessCount = userRepository.userAccess(name);

  if (userAccessCount === false) throw new AppError("User not found", 404);

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
    throw new AppError("Required body field: {name, job}", 422);
};

const validateUserQueryName = (name) => {
  if (!name) throw new AppError("Required query field: name", 400);
};

const validateUserQueryId = (id) => {
  if (!id) throw new AppError("Required query field: id must be a number", 422);
};
