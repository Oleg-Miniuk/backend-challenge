const express = require('express');

const app = express();

const {
  initErrorHandler,
  initLogger,
  initParsers,
  initRoutes,
  allowCORS,
  cacheControl
} = require('./middlewares/index');

initLogger(app);
initParsers(app);
allowCORS(app);
initRoutes(app);
initErrorHandler(app);
cacheControl(app);

module.exports = app;
