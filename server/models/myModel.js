const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  myString: { type: String, required: true, unique: true, default: 'My String' },
  myNumber: Number,
});

module.exports = mongoose.model('test', TestSchema);
