const express = require('express');
const validate = require('../middlewares/validate');
const taskValidation = require('../vaditations/taskVadilation');
const taskController = require('../controllers/taskController')
const router = express.Router();

router
  .route('/')
  .post(validate(taskValidation.createTask), taskController.createTask)
  .get(validate(taskValidation.getTasks), taskController.getTasks);

router
  .route('/name')
  .get(validate(taskValidation.getTaskByTitle), taskController.getTaskByTitle)

router
  .route('/:taskId')
  .get(validate(taskValidation.getTask), taskController.getTaskByID)
  .patch(validate(taskValidation.updateTask), taskController.updateTask)
  .delete(validate(taskValidation.deleteTask), taskController.deleteTask);



module.exports = router;