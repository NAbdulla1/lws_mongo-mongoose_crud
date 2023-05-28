const UserService = require("../services/UserService")
const logger = require("../logger");

const UserController = {
  create: async function (req, res) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  getAll: async function (req, res) {
    try {
      const allUsers = await UserService.getAll();
      res.status(200).json(allUsers);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  get: async function (req, res) {
    try {
      const includeTasks = req.query['tasks'] === 'true';
      const user = await UserService.get(req.params.id, includeTasks);
      res.status(200).json(user);
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  destroy: async function (req, res) {
    try {
      await UserService.destroy(req.params.id);
      res.status(204).json();
    } catch (error) {
      logger.error(error.message, error);
      res.status(500).json();
    }
  },
  login: async function (req, res) {
    try {
      const token = await UserService.login(req.body);
      res.status(200).json({ token: token });
    } catch (error) {
      logger.error(error.message, error);
      if (error.message === 'unauthorized') {
        res.status(401).json();
      } else {
        res.status(500).json();
      }
    }
  }
};

module.exports = UserController;
