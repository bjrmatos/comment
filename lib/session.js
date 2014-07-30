var config = require('../config')
  , session = require('express-session')
  , RedisStore = require('connect-redis')(session)
  , client = new RedisStore({port: config.storage.port, host: config.storage.host});

var session = {
  store: client,
};

module.exports = session;
