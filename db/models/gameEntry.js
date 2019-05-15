const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const gameEntrySchema = new Schema({
  name: { type: String, required: true },
  console: { type: String, lowercase: true },
  condition: String,
  comment: String,
  user: { type: String, required: true, default: 'tevin', lowercase: true },
  Qty: Number,
});

module.exports = mongoose.model('gameentries', gameEntrySchema);
