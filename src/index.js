const json = require('./vtex-schema.json');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json(json);
});

app.listen(3333, () => console.log('Server started on port 3333!'));