const initErrorHandler = require('./initErrorHandler');
const initLogger = require('./initLogger');
const initParsers = require('./initParsers');
const initRoutes = require('./initRoutes');
const allowCORS = require('./allowCORS');
const cacheControl = require('./cacheControl');

module.exports = {
  initErrorHandler,
  initLogger,
  initParsers,
  initRoutes,
  allowCORS,
  cacheControl
};
