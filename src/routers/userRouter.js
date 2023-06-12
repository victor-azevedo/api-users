const { Router } = require("express");

const userController = require("../controllers/userController");

const teste4 = require("../controllers/teste4");
const teste5 = require("../controllers/teste5");

const userRouter = Router();

userRouter.get("/user", userController.getUser);
userRouter.get("/users", userController.getUsers);
userRouter.post("/users", userController.postUser);
userRouter.delete("/users", userController.deleteUser);
userRouter.put("/users", userController.updateUser);
userRouter.get("/users/access", userController.userAccess);

module.exports = userRouter;
