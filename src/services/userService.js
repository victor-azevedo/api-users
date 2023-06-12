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

// TEST 3: create a user
const createUser = ({ name, job }) => {
  if (!name && !job)
    throw new AppError("Required body field: {name, job}", 422);

  const userCreated = userRepository.createUser({ name, job });

  return userCreated;
};

module.exports = { getUser, getUsers, createUser };
