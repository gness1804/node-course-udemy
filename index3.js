const express = require('express');
const crypto = require('crypto');
const { Worker } = require('webworker-threads');
const app = express();

const runServer = () => {
  app.get('/', (req, res) => {

    const worker = new Worker(function() {
      this.onmessage = function () {
        let counter = 0;
        while (counter < 1e9) {
          counter++;
        }
        postMessage(counter);
      }
    });

    worker.onmessage = function (message) {
      console.log('message.data:', message.data);
      res.send(`Message: ${message.data}`);
    };

    worker.postMessage();
  });

  app.get('/fast', (req, res) => {
    res.send('Fast http call is done.');
  });

  app.listen(3000, () => {
    console.log('server running on port 3000.');
  });
}

runServer();
