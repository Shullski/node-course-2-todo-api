var mongoose = require('mongoose')

// var userSchema = new Schema({
//   email: {
//     type: String,
//     trim: true,
//     minlength: 1,
//     required: true
//   }
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
});


module.exports = {
  User
}
