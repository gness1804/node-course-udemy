const https = require('https');

const start = Date.now();

const doRequest = () => {
  https.request('https://www.google.com', res => {
    res.on('data', () => { });
    res.on('end', () => {
      console.log('Time to first end', Date.now() - start);
    });
  }).end();
}

let counter = 0;
while (counter < 6) {
  doRequest();
  counter++;
}
