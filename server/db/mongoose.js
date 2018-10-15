const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
// This sets mongoose up to use promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todos');

module.exports = {
  mongoose,
  Schema
}
