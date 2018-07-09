const cluster = require('cluster');
const express = require('express');
const app = express();

const runServer = () => {
  const doWork = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hello!');
  });

  app.listen(3000, () => {
    console.log('server running on port 3000.');
  });
}

// is the file being executed in master mode?
if (cluster.isMaster) {
  //will cause index.js to be executed again, but in child mode
  cluster.fork();
} else {
  // running in child mode. this will run the server code and do nothing else
  runServer();
}
