const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://tevin:tevin123@maincluster-hucjt.mongodb.net/gamecollection?retryWrites=true',
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('open', () => {
  console.log('I am connected');
});

const app = express();
app.use(express.static(path.join(__dirname, '../build')));
console.log('i am the process', process.env.PORT);

app.listen(3000, () => {
  console.log('i am on port 3000');
});

module.exports = db;
