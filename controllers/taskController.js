const TaskService = require("../services/taskService");
const logger = require("../logger");

const TaskController = {
  create: async function (req, res) {
    try {
      const task = await TaskService.create(req.body, req.user);
      res.status(201).json(task);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  getAll: async function (req, res) {
    try {
      const allTasks = await TaskService.getAll(req.user);
      res.status(200).json(allTasks);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  get: async function (req, res) {
    try {
      const task = await TaskService.get(req.params.id, req.user);
      res.status(200).json(task);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  update: async function (req, res) {
    try {
      const upd = await TaskService.update(req.params.id, req.body, req.user);
      res.status(200).json(upd);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  destroy: async function (req, res) {
    try {
      await TaskService.destroy(req.params.id, req.user);
      res.status(204).json();
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  }
};

module.exports = TaskController;
