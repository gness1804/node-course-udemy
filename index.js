process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
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

// is the file being executed in master mode?
if (cluster.isMaster) {
  //will cause index.js to be executed again, but in child mode
  let counter = 1
  const clusterNum = 2;
  while (counter <= clusterNum) {
    cluster.fork();
    counter++;
  }
} else {
  // running in child mode. this will run the server code and do nothing else
  runServer();
}
