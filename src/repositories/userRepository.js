const usersData = require("../../mock/usersData");

const getUsers = () => {
  const users = usersData;
  return users;
};

module.exports = { getUsers };
