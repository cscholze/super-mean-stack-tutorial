var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');


// define schema
var Todo = mongoose.model('Todo', {
  task: String,
  isCompleted: Boolean,
  isEditing: Boolean
});

// export schema
module.exports.Todo = Todo;
