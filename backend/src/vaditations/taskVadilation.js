const { query } = require('express');
const Joi = require('joi');

const createTask = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string(),
    assigneeID: Joi.number().default(0),
    status: Joi.number().required().valid(1, 2, 3),
  }),
};

const getTasks = {
  query: Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTaskByTitle = {
  query: Joi.object().keys({
    title: Joi.string().required(),
  }),
};

const getTask = {
  params: Joi.object().keys({
    taskId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  }),
};

const updateTask = {
  params: Joi.object().keys({
   taskId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  }),
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string(),
    assigneeID: Joi.number().default(0),
    status: Joi.number().required().valid(1, 2, 3),
  })
    .min(1),
};

const deleteTask = {
  params: Joi.object().keys({
    taskId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  }),
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  getTaskByTitle,
  updateTask,
  deleteTask,
};
