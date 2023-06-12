const usersData = require("../../mock/usersData");

const getUsers = () => {
  const users = usersData;
  return users;
};

// TEST 3: create a user
const createUser = (newUser) => {
  const id = createIdToNewUser();

  const newUserData = { id, ...newUser };
  usersData.push(newUserData);

  return newUserData;
};

// TEST 4: delete a user
const deleteUser = (name) => {
  const indexUserToDelete = usersData.findIndex((user) => user.name === name);
  if (indexUserToDelete < 0) return false;

  usersData.splice(indexUserToDelete, 1);
  return true;
};

// Create a id for new user
const createIdToNewUser = () => {
  const { id: lastUsersDataId } = usersData.slice(-1)[0];
  return lastUsersDataId + 1;
};

module.exports = { getUsers, createUser, deleteUser };
