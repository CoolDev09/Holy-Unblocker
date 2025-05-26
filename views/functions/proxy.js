// functions/proxy.js
const serverless = require('serverless-http');
const { makeApp } = require('../src/index.js');   // or wherever Holy-Unblocker exports its Express app

// instantiate the Express app
const app = makeApp({
  // use any config you like; e.g. basePath, plugins
});

// export as a Lambda handler
exports.handler = serverless(app);
