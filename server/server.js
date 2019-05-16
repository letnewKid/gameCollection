const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const UserController = require('../db/controllers/userController');
const GameController = require('../db/controllers/gameController');

const { seedDb, addGame, getAllGames } = GameController;
const { addUser, verifyUser } = UserController;

mongoose.connect(
  'mongodb+srv://tevin:tevin123@maincluster-hucjt.mongodb.net/gamecollection?retryWrites=true',
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('open', () => {
  console.log('I am connected');
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/gameAll', getAllGames);
app.post('/addGame', seedDb);
app.post('/signUp', addUser);
app.post('/login', verifyUser);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.listen(3000, () => {
  console.log('i am on port 3000');
});

module.exports = db;
