const {
  findUserByNameDB,
  findUserByIdDB,
  findAllUsersDB,
  insertUserDB,
  deleteUserByNameDB,
  updateUserByIdDB,
  getUserAccessCountDB,
} = require("../db");

// TEST 1: get a user
const getUserByName = (name, toCount = false) => {
  const userFound = findUserByNameDB(name, toCount);

  return userFound;
};

const getUserById = (id) => {
  const userFound = findUserByIdDB(id);

  return userFound;
};

// TEST 2: get users
const getUsers = () => {
  const users = findAllUsersDB();
  return users;
};

// TEST 2: create a user
const createUser = ({ name, job }) => {
  return insertUserDB({ name, job });
};

// TEST 3: delete a user
const deleteUser = (name) => {
  return deleteUserByNameDB(name);
};

// TEST 4: delete a user
const updateUser = ({ id, name, job }) => {
  return updateUserByIdDB({ id, name, job });
};

// TEST 5: count a user access
const userAccess = (name) => {
  return getUserAccessCountDB(name);
};

module.exports = {
  getUserByName,
  getUserById,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  userAccess,
};

// LOCAL FUNCTIONS
