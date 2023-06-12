const usersAccessTable = {};

const incrementUserAccessCount = (name) => {
  usersAccessTable[name] !== undefined
    ? usersAccessTable[name]++
    : (usersAccessTable[name] = 1);
};

const getUserAccessCount = (name) => {
  return usersAccessTable[name] || 0;
};

const deleteUserAccessCount = (name) => {
  delete usersAccessTable[name];
};

const findIndex = ({ id, name }, data) => {
  if (id) return data.findIndex((user) => user.id === id);
  if (name) return data.findIndex((user) => user.name === name);
};

// Create a id for new user
const createIdToNewUser = (data) => {
  const { id: lastUsersDataId } = data.slice(-1)[0];
  return lastUsersDataId + 1;
};

module.exports = {
  incrementUserAccessCount,
  getUserAccessCount,
  deleteUserAccessCount,
  findIndex,
  createIdToNewUser,
};
