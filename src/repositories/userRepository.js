const usersData = require("../../mock/usersData");

const getUser = (name) => {
  const userFound = usersData.find((user) => user.name === name);
  return userFound;
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
  const indexUserToDelete = usersData.findIndex((user) => user.name === name);
  if (indexUserToDelete < 0) return false;

  usersData.splice(indexUserToDelete, 1);
  return true;
};

// TEST 4: delete a user
const updateUser = ({ id, name, job }) => {
  const indexUserToUpdate = usersData.findIndex((user) => user.id === id);
  if (indexUserToUpdate < 0) return false;

  usersData[indexUserToUpdate] = { id, name, job };
  return usersData[indexUserToUpdate];
};

module.exports = { getUser, getUsers, createUser, deleteUser, updateUser };

// Create a id for new user
const createIdToNewUser = () => {
  const { id: lastUsersDataId } = usersData.slice(-1)[0];
  return lastUsersDataId + 1;
};
