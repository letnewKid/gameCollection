const GameEntry = require('../models/gameEntry');

const fakeGame = {
  name: 'tevin',
  condition: 'badbad',
  Qty: 100,
};
const newEntry = new GameEntry(fakeGame);
console.log('I happened');

newEntry.save();
module.exports = newEntry;
