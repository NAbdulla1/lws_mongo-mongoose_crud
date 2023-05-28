const { Router } = require("express");
const TaskController = require("../controllers/taskController");
const UserController = require("../controllers/userController");
const authenticateUser = require("../middlewares/authMiddleware");

const apiRouter = new Router();

apiRouter.route("/tasks")
  .post(authenticateUser, TaskController.create)
  .get(authenticateUser, TaskController.getAll);

apiRouter.route("/tasks/:id")
  .get(authenticateUser, TaskController.get)
  .put(authenticateUser, TaskController.update)
  .delete(authenticateUser, TaskController.destroy);

apiRouter.get("/users", authenticateUser, UserController.getAll);
apiRouter.route("/users/:id")
  .get(authenticateUser, UserController.get)
  .delete(authenticateUser, UserController.destroy);

apiRouter.post("/signup", UserController.create);
apiRouter.post("/login", UserController.login);

module.exports = apiRouter;
