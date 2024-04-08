const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { taskService } = require('../services');

const createTask = catchAsync(async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.status(httpStatus.CREATED).send(task);
});

const getTasks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['createAt']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await taskService.queryTasks(filter, options);
  res.send(result);
});

const getTaskByID = catchAsync(async (req, res) => {
  console.log(req.params)
  const task = await taskService.getTaskById(req.params.taskId);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found');
  }
  res.send(task);
});

const getTaskByTitle = catchAsync(async (req, res) => {
  const filter = { title: { $regex: req.query.title }}
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await taskService.queryTasks(filter, options);
  res.send(result);  
});

const updateTask = catchAsync(async (req, res) => {
  const task = await taskService.updateTaskById(req.params.taskId, req.body);
  res.send(task);
});

const deleteTask = catchAsync(async (req, res) => {
  //await taskService.deleteTaskById(req.params.taskId);
  console.log(req.params.taskId)
  res.status(httpStatus.NO_CONTENT).send('Delete Successful');
});

module.exports = {
  createTask,
  getTasks,
  getTaskByID,
  getTaskByTitle,
  updateTask,
  deleteTask
};
