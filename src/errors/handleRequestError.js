const AppError = require("./AppError");

const handleError = (error, response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).send({
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).send({
    message: "Internal server error",
  });
};

module.exports = handleError;
