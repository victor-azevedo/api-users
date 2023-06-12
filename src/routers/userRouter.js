const { Router } = require("express");

const userController = require("../controllers/userController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

const userRouter = Router();

userRouter
  .get("/user", userController.getUser)
  .get("/users", userController.getUsers)
  .post("/users", userController.postUser)
  .delete("/users", authorizationMiddleware, userController.deleteUser)
  .put("/users", authorizationMiddleware, userController.updateUser)
  .get("/users/access", userController.userAccess);

module.exports = userRouter;
