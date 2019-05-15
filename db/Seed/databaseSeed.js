const GameEntry = require('../models/gameEntry');
const rawData = require('../Seed/rawSeedData');

const seedData = rawData.reduce((acc, currEntry) => {
  const { A, B, C, D } = currEntry;
  const newEntry = {
    name: A,
    console: 'gamecube',
    condition: B,
    Qty: C,
    comment: D,
  };
  acc.push(newEntry);
  return acc;
}, []);

const seeded = GameEntry.insertMany(seedData);
module.exports = seeded;
