const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const gameEntrySchema = new Schema({
  name: String,
  condition: String,
  Qty: Number,
});

module.exports = mongoose.model('sup', gameEntrySchema);
