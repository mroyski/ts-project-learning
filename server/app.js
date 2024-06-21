const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8080;

const data = [
  { id: 1, name: 'Michael', age: 35 },
  { id: 2, name: 'John', age: 40 },
  { id: 3, name: 'Dave', age: 20 },
];

app.get('/people', (req, res) => {
  res.json(data);
});

app.listen(port, () => {});
