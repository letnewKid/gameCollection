const GameEntry = require('../models/gameEntry');
const rawData = require('../Seed/rawSeedData');

const gameController = {
  getAllGames: (req, res) => {
    GameEntry.find({}, (err, gameEntries) => {
      if (err) return res.status(404).send('IT no work for you my friend');
      res.json(gameEntries);
    });
  },
  addGame: (req, res) => {
    const newEntry = req.body;
    GameEntry.create(newEntry.data, (err, doc) => {
      if (err) console.error(err);
      return res.json(doc);
    });
  },
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
