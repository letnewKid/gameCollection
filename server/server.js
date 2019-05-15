const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../build')));
console.log('i am the process', process.env.PORT);

app.listen(3000, () => {
  console.log('i am on port 3000');
});
