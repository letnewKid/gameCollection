const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const UserController = require('../db/controllers/userController');

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
// app.get('/build/build.js', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build', 'build.js'));
// });
app.get('/', (req, res) => {
  console.log('I am in the get');
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/seed');
app.post('/signUp', addUser);
app.post('/login', verifyUser);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.listen(3000, () => {
  console.log('i am on port 3000');
});

module.exports = db;
