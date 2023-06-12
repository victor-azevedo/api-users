const { Router } = require("express");

const userController = require("../controllers/userController");

const teste3 = require("../controllers/teste3");
const teste4 = require("../controllers/teste4");
const teste5 = require("../controllers/teste5");

const userRouter = Router();

userRouter.get("/user", userController.getUser);
userRouter.get("/users", userController.getUsers);
userRouter.post("/users", userController.postUser);
userRouter.delete("/users", userController.deleteUser);
userRouter.put("/users", teste4);
userRouter.get("/users/access", teste5);

module.exports = userRouter;
