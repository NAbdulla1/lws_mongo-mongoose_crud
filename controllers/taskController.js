const TaskService = require("../services/TaskService");
const logger = require("../logger");

const TaskController = {
  create: async function (req, res) {
    try {
      const task = await TaskService.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  getAll: async function (req, res) {
    try {
      const allTasks = await TaskService.getAll();
      res.status(200).json(allTasks);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  get: async function (req, res) {
    try {
      const task = await TaskService.get(req.params.id);
      res.status(200).json(task);
    } catch (error) {
      logger.error(error.message, error);
      res.sendStatus(500);
    }
  },
  update: async function (req, res) {
    try {
      const upd = await TaskService.update(req.params.id, req.body);
      res.status(200).json(upd);
    } catch (error) {
      logger.error(error.message, error);
      res.sendStatus(500);
    }
  },
  destroy: async function (req, res) {
    try {
      await TaskService.destroy(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      logger.error(error.message, error);
      res.sendStatus(500);
    }
  }
};

module.exports = TaskController;
