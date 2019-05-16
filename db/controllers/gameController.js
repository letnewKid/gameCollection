const GameEntry = require('../models/gameEntry');
const rawData = require('../Seed/rawSeedData');

const gameController = {
  getAllGames: (req, res) => {
    const { currentUser } = req.params;
    console.log(' I am the current user', currentUser);
    GameEntry.find({}, (err, gameEntries) => {
      res.json(gameEntries);
    });
  },
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
      res.json(gameEntries);
    });
  },
  updateGame: () => {},
};

module.exports = gameController;
