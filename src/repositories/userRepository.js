const usersData = require("../../mock/usersData");

const usersAccessTable = {};

const getUser = (name) => {
  const indexUserToFind = findIndex({ name });
  if (indexUserToFind < 0) return false;

  incrementUserAccess(name);

  return usersData[indexUserToFind];
};

const getUsers = () => {
  const users = usersData;
  return users;
};

// TEST 2: create a user
const createUser = (newUser) => {
  const id = createIdToNewUser();

  const newUserData = { id, ...newUser };
  usersData.push(newUserData);

  return newUserData;
};

// TEST 3: delete a user
const deleteUser = (name) => {
  const indexUserToDelete = findIndex({ name });
  if (indexUserToDelete < 0) return false;

  usersData.splice(indexUserToDelete, 1);
  return true;
};

// TEST 4: delete a user
const updateUser = ({ id, name, job }) => {
  const indexUserToUpdate = findIndex({ id });
  if (indexUserToUpdate < 0) return false;

  usersData[indexUserToUpdate] = { id, name, job };
  return usersData[indexUserToUpdate];
};

// TEST 5: count a user access
const userAccess = (name) => {
  const indexUserToCount = findIndex({ name });
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

const incrementUserAccess = (name) => {
  usersAccessTable[name] !== undefined
    ? usersAccessTable[name]++
    : (usersAccessTable[name] = 1);
};

const getUserAccessCount = (name) => {
  return usersAccessTable[name] || 0;
};

const findIndex = ({ id, name }) => {
  if (id) return usersData.findIndex((user) => user.id === id);
  if (name) return usersData.findIndex((user) => user.name === name);
};

// Create a id for new user
const createIdToNewUser = () => {
  const { id: lastUsersDataId } = usersData.slice(-1)[0];
  return lastUsersDataId + 1;
};
