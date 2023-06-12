const usersData = require("../../mock/usersData");
const {
  incrementUserAccessCount,
  getUserAccessCount,
  deleteUserAccessCount,
  findIndex,
  createIdToNewUser,
} = require("../utils");

// TEST 1: get a user
const getUser = (name) => {
  const indexUserToFind = findIndex({ name }, usersData);
  if (indexUserToFind < 0) return false;

  incrementUserAccessCount(name);

  return usersData[indexUserToFind];
};

// TEST 2: get users
const getUsers = () => {
  const users = usersData;
  return users;
};

// TEST 2: create a user
const createUser = (newUser) => {
  const id = createIdToNewUser(usersData);

  const newUserData = { id, ...newUser };
  usersData.push(newUserData);

  return newUserData;
};

// TEST 3: delete a user
const deleteUser = (name) => {
  const indexUserToDelete = findIndex({ name }, usersData);
  if (indexUserToDelete < 0) return false;

  deleteUserAccessCount(name);

  usersData.splice(indexUserToDelete, 1);
  return true;
};

// TEST 4: delete a user
const updateUser = ({ id, name, job }) => {
  const indexUserToUpdate = findIndex({ id }, usersData);
  if (indexUserToUpdate < 0) return false;

  usersData[indexUserToUpdate] = { id, name, job };
  return usersData[indexUserToUpdate];
};

// TEST 5: count a user access
const userAccess = (name) => {
  const indexUserToCount = findIndex({ name }, usersData);
  if (indexUserToCount < 0) return false;

  return getUserAccessCount(name);
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  userAccess,
};

// LOCAL FUNCTIONS
