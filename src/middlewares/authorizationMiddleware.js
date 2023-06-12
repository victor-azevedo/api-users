const AppError = require("../errors/AppError");
const handleRequestError = require("../errors/handleRequestError");

// TEST 6: middleware to authorize client
const authorizationMiddleware = (req, res, next) => {
  try {
    // authHeader should be "Bearer token_jwt_test"
    const authHeader = req.header("Authorization");
    if (!authHeader)
      throw new AppError("Usuário precisa ser ter Autorização", 401);

    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token)
      new AppError("'Authorization' tem que ter formato válido", 401);

    // In a real application here must be replaced by a JWT verify function
    // Ex. jwt.verify(token, process.env.JWT_SECRET) by 'jsonwebtoken' lib
    if (token !== "token_jwt_test") throw new AppError("'token' inválido", 401);

    return next();
  } catch (error) {
    handleRequestError(error, res);
  }
};
module.exports = authorizationMiddleware;
