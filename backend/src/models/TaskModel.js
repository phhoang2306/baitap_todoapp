const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    content: {
      type: String
    },
    assigneeID: {
      type: Number,
      default: 0,
    },
    status: {
      type: Number,
      default: 1,
      required: true,
      min: 1,
      max: 3
    }
  },
  {
    timestamps: true,
    //collection: 'task'
  }
);

// add plugin that converts mongoose to json
taskSchema.plugin(toJSON);
taskSchema.plugin(paginate);

/**
 * Check if title is taken
 * @param {string} title - The tasks'title
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
taskSchema.statics.isTitleTaken = async function (title, excludeUserId) {
  const tasks = await this.findOne({ title, _id: { $ne: excludeUserId } }); // Check task's name without check itself
  return !!tasks;
};

/**
 * @typedef Task
 */
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
