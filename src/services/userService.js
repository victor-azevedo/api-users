const userRepository = require("../repositories/userRepository");
const AppError = require("../errors/AppError");

const getUser = (name) => {
  if (!name) throw new AppError("Required query field: name", 400);

  const users = userRepository.getUsers();

  const userFound = users.find((user) => user.name === name);

  if (!userFound) throw new AppError("User not found", 404);

  return userFound;
};

const getUsers = () => {
  const usersList = userRepository.getUsers();

  return usersList;
};

// TEST 2: create a user
const createUser = ({ name, job }) => {
  if (!name && !job)
    throw new AppError("Required body field: {name, job}", 422);

  const userCreated = userRepository.createUser({ name, job });

  return userCreated;
};

// TEST 3: delete a user
const deleteUser = (name) => {
  if (!name) throw new AppError("Required query field: name", 400);

  const isUserDeleted = userRepository.deleteUser(name);
  if (!isUserDeleted) throw new AppError("User not found", 404);

  return;
};

// TEST 4: update a user
const updateUser = ({ id, name, job }) => {
  if (!id) throw new AppError("Required query field: id must be a number", 422);
  if (!name || !job)
    throw new AppError("Required body field: {name, job}", 422);

  const userUpdated = userRepository.updateUser({ id, name, job });

  if (!userUpdated) throw new AppError("User not found", 404);

  return userUpdated;
};

module.exports = { getUser, getUsers, createUser, deleteUser, updateUser };
