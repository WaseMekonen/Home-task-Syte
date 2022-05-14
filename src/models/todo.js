const mongoose = require("mongoose");

const Todo = mongoose.model("todo", {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Todo;
