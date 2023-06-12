const AppError = require("../errors/AppError");

const notFoundError = () => {
  throw new AppError("Usuário não encontrado", 404);
};

module.exports = notFoundError;
