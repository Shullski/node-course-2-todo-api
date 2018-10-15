var mongoose = require('mongoose');

// var todoSchema = new Schema({
//   text : {
//     type: String,
//     minlength: 1,
//     trim: true,
//     required: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// Create a model for a todo item
var Todo = mongoose.model('Todo', {
  text : {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {
  Todo
}
