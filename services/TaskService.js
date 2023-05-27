const Task = require("../db/models/task");

const TaskService = {
  create: async function (task) {
    task = new Task(task);
    await task.save();
    return task;
  },
  getAll: async function () {
    return await Task.findAll({});
  },
  get: async function (taskId) {
    return await Task.findOne({ _id: taskId });
  },
  update: async function (taskId, task) {
    return await Task.updateOne({ _id: taskId }, task);
  },
  destroy: async function (taskId) {
    return await Task.deleteOne({ _id: taskId });
  }
};

module.exports = TaskService;