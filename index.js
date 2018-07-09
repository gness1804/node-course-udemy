const express = require('express');
const app = express();

const doWork = (duration) => {
  const start = Date.now();
  while (Date.now() - start < duration) {

  }
}

app.get('/', (req, res) => {
  doWork(5000);
  res.send('Hello!');
});

app.listen(3000, () => {
  console.log('server running on port 3000.');
});
