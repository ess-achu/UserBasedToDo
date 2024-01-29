const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {
      type: String,
      required: [true, "Task is required"],
    },
    isComplete: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
    },
    guid: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;