const Task = require("../db/models/task");

const TaskService = {
  create: async function (task, user) {
    task = new Task({ ...task, user: user._id });
    await task.save();
    return task;
  },
  getAll: async function (user) {
    return await Task.find({ user: user._id });
  },
  get: async function (taskId, user) {
    return await Task.findOne({ _id: taskId, user: user._id });
  },
  update: async function (taskId, task, user) {
    const updData = await Task.updateOne({ _id: taskId, user: user._id }, task);
    return updData.modifiedCount == 1;
  },
  destroy: async function (taskId, user) {
    return await Task.deleteOne({ _id: taskId, user: user._id });
  }
};

module.exports = TaskService;