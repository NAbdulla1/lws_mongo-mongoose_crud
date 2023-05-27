const { Router } = require("express");
const TaskController = require("../controllers/taskController");

const apiRouter = new Router();

apiRouter.route("/tasks")
  .post(TaskController.create)
  .get(TaskController.getAll);

apiRouter.route("/tasks/:id")
  .get(TaskController.get)
  .put(TaskController.update)
  .delete(TaskController.destroy);

module.exports = apiRouter;
