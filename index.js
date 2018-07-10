const cluster = require('cluster');
const express = require('express');
const app = express();

const runServer = () => {
  app.get('/', (req, res) => {
    res.send('Hello!');
  });

  app.get('/fast', (req, res) => {
    res.send('This was fast!');
  });

  app.listen(3000, () => {
    console.log('server running on port 3000.');
  });
}

// is the file being executed in master mode?
if (cluster.isMaster) {
  //will cause index.js to be executed again, but in child mode
  let counter = 1
  while (counter <= 4) {
    cluster.fork();
    counter++;
  }
} else {
  // running in child mode. this will run the server code and do nothing else
  runServer();
}
