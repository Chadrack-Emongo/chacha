const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 8002;

app.use(express.json());






app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log("serveur en marche")
});
