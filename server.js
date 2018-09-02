const express = require('express');
const path = require('path');
require('dotenv').config();

const publicDir = path.join(__dirname, 'build');
const isRunningLocally = process.env.NODE_ENV === 'development';

const PORT = process.env.PORT || 5000;

express()
  .use((req, res) => {
    if (req.protocol !== 'https' && !isRunningLocally) {
      console.log(req.protocol, req.secure);
      console.log('redirecting');
      const secureUrl = `https://${req.headers.host}${req.url}`;
      res.writeHead(301, { Location: secureUrl });
      res.end();
    }
  })
  .use(express.static(publicDir))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
