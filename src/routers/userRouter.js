const { Router } = require("express");

const userController = require("../controllers/userController");

const userRouter = Router();

userRouter
  .get("/user", userController.getUser)
  .get("/users", userController.getUsers)
  .post("/users", userController.postUser)
  .delete("/users", userController.deleteUser)
  .put("/users", userController.updateUser)
  .get("/users/access", userController.userAccess);

module.exports = userRouter;
