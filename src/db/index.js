const usersData = require("../../mock/usersData");

const usersByNameTable = {};
const usersByIdTable = {};
const usersAccessCountTable = {};

let idRef = 0;

const inicializeDB = () => {
  if (isEmptyObject(usersByNameTable)) {
    populateUsersByNameTable();
  }
  if (isEmptyObject(usersByIdTable)) {
    populateUsersByIdTable();
  }
  if (isEmptyObject(usersAccessCountTable)) {
    populateUsersAccessCountTable();
  }
  createFirstId();
};

const findUserByNameDB = (name, toCount = false) => {
  const userFound = usersByNameTable[name];
  if (!userFound) return false;

  if (toCount) usersAccessCountTable[userFound.id]++;

  return userFound;
};

const findUserByIdDB = (id) => {
  const userFound = usersByIdTable[id];
  if (!userFound) return false;

  return userFound;
};

const findAllUsersDB = () => {
  const allUsers = Object.values(usersByIdTable);
  return allUsers;
};

const insertUserDB = ({ name, job }) => {
  if (isRepeatedName(name)) return false;

  const userToInsert = { id: idRef, name, job };

  updateUsersTables(userToInsert);
  updateId();

  return userToInsert;
};

const deleteUserByNameDB = (name) => {
  const userToDelete = usersByNameTable[name];
  if (!userToDelete) return false;

  deleteUserFromTables(userToDelete);

  return true;
};

const updateUserByIdDB = ({ id, name, job }) => {
  const userExist = usersByIdTable[id];
  if (!userExist) return false;

  const userToUpdate = { id, name, job };
  updateUsersTables(userToUpdate);

  return userToUpdate;
};

const getUserAccessCountDB = (name) => {
  const user = usersByNameTable[name];
  if (!user) return -1;

  const count = usersAccessCountTable[user.id];

  return count;
};

module.exports = {
  inicializeDB,
  findUserByNameDB,
  findUserByIdDB,
  findAllUsersDB,
  insertUserDB,
  deleteUserByNameDB,
  updateUserByIdDB,
  getUserAccessCountDB,
};

// LOCAL FUNCTIONS
function isEmptyObject(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

function populateUsersByNameTable() {
  usersData.forEach((user) => {
    usersByNameTable[user.name] = user;
  });
}

function populateUsersByIdTable() {
  usersData.forEach((user) => {
    usersByIdTable[user.id] = user;
  });
}

function populateUsersAccessCountTable() {
  usersData.forEach((user) => {
    usersAccessCountTable[user.id] = 0;
  });
}

// Ensure a unique ID by incrementing from the maximum ID in the usersData.
function createFirstId() {
  idRef = maxIdFromUsersData() + 1;
}

function maxIdFromUsersData() {
  const userWithMaxId = usersData.reduce((prev, current) =>
    prev.id > current.id ? prev : current
  );
  const { id: maxId } = userWithMaxId;
  return maxId;
}

function isRepeatedName(name) {
  return usersByNameTable[name] ? true : false;
}

function updateUsersTables(user) {
  usersByNameTable[user.name] = user;

  usersAccessCountTable[user.id] = usersAccessCountTable[user.id] || 0;

  usersByIdTable[user.id] = user;
}

function deleteUserFromTables(user) {
  delete usersByNameTable[user.name];

  delete usersAccessCountTable[user.id];

  delete usersByIdTable[user.id];
}

function updateId() {
  idRef++;
}
