const express = require('express');
const crypto = require('crypto');
const app = express();

const runServer = () => {
  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('Crypto request done.');
    })
  });

  app.get('/fast', (req, res) => {
    res.send('Fast http call is done.');
  });

  app.listen(3000, () => {
    console.log('server running on port 3000.');
  });
}

runServer();
