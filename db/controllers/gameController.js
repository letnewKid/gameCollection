const GameEntry = require('../models/gameEntry');
const rawData = require('../Seed/rawSeedData');

const gameController = {
  getAllGames: () => {},
  addGame: () => {},
  deleteGame: () => {},
  seedDb: (req, res) => {
    // gets user information from user information from req.body
    const seedEntries = rawData.reduce((acc, currEntry) => {
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
    GameEntry.insertMany(seedEntries, (err, gameEntries) => {
      if (err) console.error('Your error is', err);
      console.log('Seeded GameEntries', gameEntries);
    });
  },
  updateGame: () => {},
};

module.exports = gameController;
