const { Router } = require("express");

const teste1 = require("../controllers/teste1");
const teste2 = require("../controllers/teste2");
const teste3 = require("../controllers/teste3");
const teste4 = require("../controllers/teste4");
const teste5 = require("../controllers/teste5");

const userRouter = Router();

userRouter.get("/user", teste1.getUser);
userRouter.get("/users", teste1.getUsers);
userRouter.post("/users", teste2);
userRouter.delete("/users", teste3);
userRouter.put("/users", teste4);
userRouter.get("/users/access", teste5);

module.exports = userRouter;
